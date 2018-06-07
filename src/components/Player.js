import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import InputRange from 'react-input-range'
// import MdChevronRight from 'react-icons/lib/md/chevron-right'
// import MdAdd from 'react-icons/lib/md/add'
// import MdRemove from 'react-icons/lib/md/remove'
// import MdStar from 'react-icons/lib/md/star'

// import BBSearch from './BBSearch'

import allPlayers from '../players'
import { seasonNameMap } from '../utils/season'

import training from '../training'

const StaticHost = 'http://fifa.waochina.com'
const SeasonClassMap = {
  '02': 'bg-fut_champions_gold',
  '03': 'bg-fut_champions_bronze',
  '10': 'bg-gotm'
}
const statColor = (stat) => stat > 85 ? 'great' : stat > 70 ? 'good' : stat > 60 ? 'average' : stat > 50 ? 'fair' : 'poor'

const clone = (obj) => JSON.parse(JSON.stringify(obj))
const calSixAttr = (person) => {
  person.Pace = Math.floor(.5 * person['Acceleration'] + .5 * person['Sprint Speed'])
  person.Shooting = Math.floor(.4 * person['Finishing'] + .2 * person['Long Shot'] + .2 * person['Shot Power'] + .2 * person['Positioning'])
  person.Passing = Math.floor(.25 * person['Crossing'] + .4 * person['Short Passing'] + .25 * person['Long Passing'] + .1 * person['Free Kick'])
  person.Agility = Math.floor(.1 * person['Awareness'] + .15 * person['Reactions'] + .3 * person['Ball Control'] + .4 * person['Dribbling'] + .05 * person['Composure'])
  person.Defending = Math.floor(.2 * person['Heading'] + .4 * person['Marking'] + .4 * person['Tackling'])
  person.Physical = Math.floor(.5 * person['Strength'] + .5 * person['Aggression'])
  return person
}
const calGKAttr = (person) => {
  person.Passing = Math.floor(.3 * person['Short Passing'] + .3 * person['Ball Control'] + .3 * person['Long Passing'] + .1 * person['Free Kick'])
  person.Physical = Math.floor(.2 * person['Strength'] + .1 * person['Aggression'] + .4 * person['Reactions'] + .1 * person['Acceleration'] + .2 * person['Sprint Speed'])
  return person
}

class Player extends Component {
  constructor ({ match }) {
    super()

    const samePlayerList = allPlayers.filter((player) => player.ID === match.params.id.substr(2))
    let thisPlayer = calSixAttr(allPlayers.filter((player) => `${player.Season}${player.ID}` === match.params.id)[0])
    if (thisPlayer['Position'] === 'GK') thisPlayer = calGKAttr(thisPlayer)
    thisPlayer.showOVR = thisPlayer.Overall

    const trainStat = {}
    switch (thisPlayer['Position']) {
      case 'GK':
        training.GK.forEach((item, i) => { trainStat[i + 45] = item });break
      case 'CB':
        training.CB.forEach((item, i) => { trainStat[i + 46] = item });break
      case 'LB':
      case 'RB':
        training.SB.forEach((item, i) => { trainStat[i + 44] = item });break
      case 'LWB':
      case 'RWB':
        training.SWB.forEach((item, i) => { trainStat[i + 49] = item });break
      case 'CAM':
        training.CAM.forEach((item, i) => { trainStat[i + 46] = item });break
      case 'CM':
        training.CM.forEach((item, i) => { trainStat[i + 45] = item });break
      case 'LM':
      case 'RM':
        training.SM.forEach((item, i) => { trainStat[i + 48] = item });break
      case 'CDM':
        training.CDM.forEach((item, i) => { trainStat[i + 48] = item });break
      case 'ST':
        training.ST.forEach((item, i) => { trainStat[i + 46] = item });break
      case 'CF':
        training.CF.forEach((item, i) => { trainStat[i + 56] = item });break
      case 'LF':
      case 'RF':
        training.SF.forEach((item, i) => { trainStat[i + 54] = item });break
      case 'LW':
      case 'RW':
        training.SW.forEach((item, i) => { trainStat[i + 47] = item });break
      default:
    }
    

    const boostStat = {}
    training.BOOST.filter((item) => item['chinese_name'] === thisPlayer['Skill Boost']).forEach((item, i) => {
      boostStat[item.level] = item
    })

    const boostActive = {}
    Object.keys(boostStat[0]).forEach((key) => {
      if (key.indexOf('__') !== -1) {
        boostActive[`${key.substr(2)}`] = boostStat[0][key]
      }
    })

    this.state = {
      samePlayerList,
      baseOVR: thisPlayer.Overall,
      originPlayer: clone(thisPlayer),
      thisPlayer: clone(thisPlayer),
      trainStat,
      boost: 0,
      boostStat,
      boostActive
    }
  }

  calPlayerStat (overall = this.state.originPlayer.Overall, boost = 0) {
    let thisPlayer = this.state.thisPlayer
    const originPlayer = this.state.originPlayer
    const trainStat = this.state.trainStat
    const boostStat = this.state.boostStat

    Object.keys(this.state.trainStat[overall]).forEach((key) => {
      const stat = originPlayer[key] + trainStat[overall][key] - trainStat[originPlayer.Overall][key]
      thisPlayer[key] = stat <= 120 ? stat : 120
    })

    Object.keys(this.state.boostActive).forEach((key) => {
      if (this.state.boostActive[key]) {
        thisPlayer[key] = Math.round((boostStat[boost][key] + 100) * thisPlayer[key] / 100)
        if (thisPlayer[key] > 140) {
          thisPlayer[key] = 140
        }
      }
    })

    thisPlayer.showOVR = overall + boost
    thisPlayer = calSixAttr(thisPlayer)
    if (thisPlayer.Position === 'GK') {
      thisPlayer = calGKAttr(thisPlayer)
    }
    
    return thisPlayer
  }

  handleTrain = (overall) => {
    const thisPlayer = this.calPlayerStat(overall, this.state.boost)
    thisPlayer.Overall = overall
    this.setState({ thisPlayer })
  }

  handleBoost = (boost) => {
    this.setState({
      thisPlayer: this.calPlayerStat(this.state.thisPlayer.Overall, boost),
      boost
    })
  }

  render() {
    let thisPlayer = this.state.thisPlayer
    if (thisPlayer['Position'] === 'GK') thisPlayer = calGKAttr(thisPlayer)
    return (
      <div>
        <article className="body-outer">
          <div className="ut-body-inner ut-body-inner--fixed player-detail">
            <div className="ut-bio-controls">
              <Link to={'/'} className="ut-bio-controls_back">
                <MdChevronLeft size={28} />
                返回列表页
              </Link>
              <ul className="ut-bio-versions">
                <li className="ut-bio-versions_label">版本</li>
                {
                  this.state.samePlayerList.map((player, i) => {
                    return (
                      <li key={i} className={`ut-bio-versions_item ${`${player.Season}${player.ID}` === `${thisPlayer.Season}${thisPlayer.ID}` ? 'ut-bio-versions_item--current' : ''}`}>
                        <a href={`/player/${player.Season}${player.ID}`}
                          className={`ut-bio-versions_link ut-bio-versions_link--${SeasonClassMap[player.Season]}`}
                        >{player.Overall}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className="ut-bio ut-underlay">
            <div className="ut-body-inner">
              <div className="ut-bio-details">
                <div className="ut-bio-details_group">
                  <div className="player-cards">
                    <div className="playercard fm18 master card-large text-center center-block"
                      style={{backgroundImage: `url(https://futhead.cursecdn.com/static/img/fm/18/resources/backgrounds_SR${thisPlayer.showOVR >= 100 ? '5' : thisPlayer.showOVR >= 90 ? '4' : thisPlayer.showOVR >= 80 ? '3' : thisPlayer.showOVR >= 70 ? '2' : '1'}.png)`,margin: 'auto'}}
                    >
                      {/*<img className="player-image" src={`${StaticHost}/images/player_bg/${thisPlayer.ID}.png`} />*/}
                      <img className="player-image" src={`https://futhead.cursecdn.com/static/img/fm/18/players/${thisPlayer.ID}.png`} />
                      <div className="rating">{thisPlayer.showOVR}</div>
                      <div className="name">{thisPlayer['Chinese Name']}</div>
                      <div className="position">{thisPlayer['Position']}</div>
                      <div className="boost">{thisPlayer['Skill Boost']}</div>
                      {/*<div className="club">
                        <img src={`${StaticHost}/images/season/${thisPlayer.Season}.png`} />
                      </div>*/}
                    </div>
                  </div>
                  <svg className="ut-icon ut-polygons-bio">
                    <svg id="ut-polygons-bio" viewBox="0 0 504 466" width="100%" height="100%"><path className="ut-polygons-bio-path" d="M382.68,678.177l4.168-4.207Q384.811,676.12,382.68,678.177Zm-255.816-219.9,37.475-37.822A202.624,202.624,0,0,0,126.864,458.279ZM225.732,388.1L194.96,418.867H192.8L97.277,513.318q-1.98,5.654-3.631,11.457L230.538,386.617C228.927,387.09,227.327,387.59,225.732,388.1Zm25.775,59.778,66.518-67.134q-2.181-.332-4.379-0.614L242.2,450.773Q246.784,449.167,251.507,447.881ZM117.135,687.493q2.194,3.466,4.524,6.837L168.353,647.2q-1.892-3.339-3.6-6.795Zm151.461,27.9-53.241,52.643q4.736,1.815,9.583,3.4l54.476-54.98Q273.944,716.137,268.6,715.394ZM486.537,548.353l-66.511,65.765a135.818,135.818,0,0,1-4.659,14.584l72.2-72.872Q487.122,552.071,486.537,548.353Zm1.739,14.432-77.561,76.69a137.091,137.091,0,0,1-23.867,34.5L488.8,571.072Q488.623,566.906,488.276,562.785Zm-129.7,205.661L476.769,649.159q2.74-7.481,4.892-15.229L339.4,774.588A199.821,199.821,0,0,0,358.576,768.446Zm31.075-14.877,72.533-73.2a200.828,200.828,0,0,0,10.844-21.748L364.19,766.232A200.714,200.714,0,0,0,389.651,753.569Zm63.916-59.559L399.8,747.178A202.58,202.58,0,0,0,453.567,694.01ZM107.34,758.238l42.447-42.84,0,0L305.24,558.506h-2.566l-60.325,60.311h-1.693l-42.739,42.729h-3.064L172.024,684.37H169.3l-0.478.472-30.644,30.3q1.755,1.935,3.564,3.818l-12.2,12.2h2.483l-27.087,27.081h2.4ZM343.71,534.186l-38.959,38.95h-1.57l-30.859,30.851h-1.266l-47.315,47.3h-1.6l-28.512,28.131s-1.016-.967-1.518-1.456l-45.98,45.463c0.637,0.627,1.923,1.868,1.923,1.868L129.81,743.534h2.672l-23.606,23.6h2.317l-17.815,17.81h1.71L74.929,805.1h2.228L345.672,534.186H343.71Zm-29.5,45.936-47.163,47.151h-1.936L231.377,661h-2.956l-26.034,26.021s-1.14-.913-1.705-1.377l-46.135,45.618c1.538,1.351,5.243,4.493,5.243,4.493l-13.161,13.16h2.5L316.491,580.122h-2.285ZM231.245,680.269l-15.893,15.9s-3.853-2.492-5.393-3.553l-46.53,46.007q3.486,2.727,7.093,5.3L233.6,680.269h-2.352ZM288.568,638.8l-33.5,33.488h-2.446l-28.762,28.737s-2.621-1.406-3.912-2.14l-47.165,46.635q3.714,2.576,7.549,4.986L291.02,638.8h-2.452ZM337.7,605.889l-44.109,44.1h-2.4l-28.763,28.756h-2.291l-26.812,26.807s-1.742-.762-2.6-1.156l-48.082,47.541q3.951,2.412,8.019,4.645L339.815,605.889H337.7Zm-36.583,53.353-30.775,30.769h-2.012l-20.789,20.752s-3.485-1.1-5.205-1.7l-49.339,48.785q4.2,2.232,8.51,4.27L303.2,659.339C302.155,659.307,301.113,659.242,301.113,659.242Zm-23.875,40.547-14.64,14.64s-5.158-1.026-7.7-1.646l-51.014,50.441q4.457,2.035,9.029,3.859l66.715-67.294h-2.394Zm114.44-48.919-35.106,35.1h-3.12L329.18,710.233s-5.891,1.767-8.9,2.506l-66.53,65.783q5.734,0.966,11.575,1.606L393.943,650.87h-2.265Zm-173.4,143.565,120.2-121.123h-2.34l-26.226,26.22h-2.764L290,716.676s-1.663.024-2.5,0.024c-1.283,0-2.562-.021-3.837-0.056l-56.224,55.592c2.417,0.754,7.678,2.223,7.678,2.223l-19.973,19.976h3.129Zm175.9-163.25L362.044,663.3h-2.559L331.08,691.7h-3.13L303.9,715.719s-2.215.251-3.329,0.357l-60.358,59.681c2.094,0.5,6.319,1.411,6.319,1.411L233.62,790.109h2.441l-21.455,21.45h3.216L396.5,631.126A14.881,14.881,0,0,0,394.171,631.185ZM382.68,678.177a137.1,137.1,0,0,1-36.936,25.539l-77.574,76.7q4.711,0.448,9.485.678L266.3,792.458h3.129l11.155-11.24s8.278-8.342,8.278-8.342ZM249.35,598.4h-2.633L210.61,634.5h-2.641L179.08,663.357s-1.392-1.833-2.072-2.762l-46.321,45.8q2.62,3.243,5.372,6.372Zm-58,41.907h-2.577L173.5,655.578s-2.064-3.172-2.994-4.7l-46.831,46.305q2.407,3.357,4.948,6.609Zm-22.018-15.476h-2.049L160.62,631.5s-0.658-1.638-.976-2.463L110.934,677.2q1.978,3.573,4.094,7.059L224.585,573.646H222.6L193.648,602.6h-2.067Zm22.573-34.456h-1.981l-23.339,23.334h-2.067l-7.5,7.5q-0.663-2.091-1.262-4.21l-50.175,49.611q1.031,2.154,2.112,4.278l-11.62,11.618H98.56L71.473,709.588h2.4l84.251-85.036Zm-88.071,72.479,2.267-2.287,1.74-1.756h0l41.4-41.781h0.012l5.091-5.15,0.071-.072h0l9.675-9.788h-1.981l-8.088,8.087q-0.705-3.118-1.27-6.288L100.63,655.361q0.713,1.762,1.46,3.509l-29.2,29.19h2.317L57.394,705.871H59.1L38.945,726.025h2.227l62.665-63.167h0ZM88.6,612.287v0l66.513-67.128q1.6-6.1,3.73-11.97L87.42,603.818c0.259,2.192.565,4.369,0.894,6.538L67.156,631.508h2.4Zm17.477-34.12h0l59.1-59.65a136.77,136.77,0,0,1,12.106-19.71L86.21,588.863c0.1,2.213.24,4.414,0.407,6.609l-8.965,8.962h2.4ZM86.04,664.33l12.973-13.094,0,0.006,50.807-51.277h0l39.491-39.813h-1.981L164,583.485h-2.066l-10.535,10.533q-0.236-2.295-.4-4.611L96.271,643.52c0.676,2.032,1.392,4.045,2.13,6.048L83.635,664.33h2.4ZM227.766,502.936L198.81,531.884h-2.066L174.5,554.124h-2.049l-21.715,21.71c0.024-.8.048-1.6,0.086-2.4l-58.256,57.6q1.05,4.01,2.258,7.953L229.631,502.936h-1.865ZM89.58,617.834q0.787,4.13,1.743,8.2l59.035-59.581h0.007l49.648-50.107h-1.865l-28.955,28.949h-2.067l-15.072,15.069q0.368-2.577.831-5.123Zm111.789-220.1-29.9,29.9h-1.82l-30.28,30.272h-2.382L109.889,484.7q-3.726,6.934-6.919,14.183l101.758-102.7Q203.038,396.942,201.368,397.738Zm47.837-15.648-27.006,27h-0.882l-34.858,34.848h-1.47L154.47,474.669h-1.66L90.851,535.822q-1.139,5.1-2.018,10.3L251.848,381.594C250.965,381.752,250.084,381.92,249.205,382.09Zm19.181-2.738-41.333,41.353h-1.03l-32.8,32.569h-1.471l-32.872,32.864h-1.538L87.5,555.284q-0.582,4.772-.94,9.611L270.6,379.153C269.862,379.214,269.124,379.283,268.386,379.352Zm41.581-23.566-2,.011-42.38,42.7h-1.471L232.2,430.409h-2.07L86.136,572.786q-0.123,3.538-.126,7.108c0,0.678.006,1.355,0.013,2.032ZM297.35,385.135l10.1-10.2-2,.011-3.957,3.988q-1.395-.094-2.793-0.173l-91.073,90.05a136.885,136.885,0,0,1,17.34-10.63l72.376-73.045h0.006ZM271.684,444l58.836-59.381,22.1-22.2-2,.011-20.48,20.549c-0.834-.18-1.666-0.365-2.5-0.535l-63.314,62.6Q267.972,444.429,271.684,444Zm69.124-58.425-58.263,57.609c1.646-.059,3.3-0.1,4.958-0.1,0.47,0,.936.013,1.4,0.018l55.88-56.4h0l40.953-41.349-2,.011-24.4,24.62-1.564.009-15.773,15.919C341.605,385.806,341.209,385.687,340.808,385.578ZM484.375,622.972q1.05-4.822,1.872-9.728L318.668,778.94q8.315-1.29,16.394-3.248l148.727-150.1h0l17.634-17.8-2,.011ZM511.8,578.814l-1.865.01-22.044,22.24c0.081-.774.153-1.549,0.226-2.325l-52.069,52.056H433.7L400.31,684.173h-2.132l-97.863,96.764q7.407-.465,14.661-1.459L487.387,605.472h0l48.431-48.879-2,.011Zm0.912-15.369-2,.011L496.684,577.6l-1.805.01-5.917,5.97q0.033-1.839.034-3.687c0-.554-0.006-1.107-0.01-1.66L283.616,781.3c1.293,0.025,2.588.041,3.887,0.041q4.787,0,9.518-.224L468.186,608.365ZM292.541,455.928l64.541-65.143q-1.9-.7-3.828-1.362l-54.723,54.108c1.078,0.086,2.862.267,3.929,0.378l-11.93,12.019h2.011Zm38,11.115,14.583-14.731,45.247-45.666h0l11.264-11.371-2,.011L389.1,405.906c-0.735-.43-1.469-0.863-2.21-1.284l-48.706,48.159c1.067,0.426,2.124.871,3.177,1.323l-12.827,12.939h2.011Zm34.508-73.131-52.127,51.541c0.7,0.132,1.394.271,2.089,0.411l-22.8,23h1.842l-22.47,22.663h2.011l44.579-44.986h0L368.747,395.5l-0.011,0,19.573-19.762-2,.011-18.975,19.15C366.573,394.565,365.814,394.232,365.048,393.912Zm-42.493,97.707L353.7,460.142h0l46.7-47.128q-1.683-1.14-3.392-2.245L349.388,457.85c0.605,0.307,1.206.622,1.806,0.939l-16.612,16.755h1.877l-15.915,16.075h2.011Zm68.863,95.312,30.813-31.1h0l50.3-50.76,11.6-11.705h-1.99l-8.706,8.772q-0.8-1.914-1.638-3.809l-51.01,50.437q0.446,1.91.832,3.842L406.027,568.33h1.822l-18.442,18.6h2.011Zm32.751-.093a0.026,0.026,0,0,0,0,.007L428,582.977l0.067-.067h0l54.223-54.725h0l10.182-10.28-2,.011-8.614,8.684c-0.423-1.547-.857-3.089-1.316-4.62l-56.229,55.6c0.012,0.772.029,1.543,0.029,2.318,0,1.628-.039,3.247-0.1,4.862l-15.571,15.656h2.011ZM361.1,633.993l62.912-63.48v0l44.882-45.3,23.316-23.507h-1.99l-12.247,12.337c-0.487-1.406-.984-2.808-1.5-4.2l-53.232,52.635c0.105,0.829.2,1.661,0.288,2.494l-18.772,18.952h1.98l-26.335,26.563h1.987l-23.3,23.5H361.1Zm31.2-130.382,8.418-8.5h0L443.3,452.142h0l49.613-50.078-2,.011-26.749,26.989-1.865.01L441.57,450.085c-0.4-.478-0.8-0.961-1.207-1.435l-46.14,45.622q1.2,1.491,2.352,3.016l-6.283,6.323H392.3Zm19.965,45.767,6.881-6.945a0.121,0.121,0,0,1,0,.018L456.6,504.663h0l5.835-5.89,6.517-6.577h0l40.067-40.444-2,.011-26.749,26.989-1.866.01-10.72,10.868q-0.568-1.13-1.148-2.252L417.2,536.158c0.527,1.564,1.019,3.144,1.491,4.732l-8.433,8.488h2.011Zm-5.646-131.969L359.784,463.72q1.455,0.907,2.885,1.848L345.21,483.184h2.011L371.762,458.4l38.163-38.516h0l20.7-20.89-2,.011-19.849,20.015C408.056,418.479,407.344,417.938,406.622,417.409Zm62.406-28.022-20.87,21.238-1.706.01L424.9,432.562c-0.161-.15-0.318-0.305-0.479-0.454L378.386,477.63q1.857,1.65,3.658,3.361l37.787-38.136L507.8,354.086l-2,.011-34.97,35.28Zm28.531,53.637-20.871,21.238-1.706.009L461.4,478.09c-0.222-.377-0.441-0.756-0.665-1.132L412.653,524.5q1.237,2.793,2.357,5.646l33.221-33.528h0l88.094-88.9-2,.011-34.97,35.28Zm21.079,62.946-2,.011-16.074,16.357-1.953.011-14.237,14.487c-0.149-.683-0.3-1.368-0.451-2.049L423.57,594.463q-0.6,5.642-1.65,11.139l56.288-56.809h0l64.736-65.329-2,.011-23.282,23.488ZM490.774,383.931l-27.445,27.676-1.437.008L433.1,440.652c-0.159-.166-0.313-0.336-0.473-0.5l-45.973,45.457c0.844,0.887,1.669,1.791,2.488,2.7l-15.879,16h2.011l14.812-14.948h0l45.573-45.995a0,0,0,0,1,0,0l94.833-95.707-2,.011L492.56,383.921Zm15.116,35.991L479.142,446.91l-1.866.011-21.643,21.94c-0.4-.606-0.794-1.218-1.2-1.819l-47.167,46.637q1.394,2.514,2.684,5.092l47.191-47.628,0,0,50.754-51.229ZM363.645,411.45l-37.577,37.156q2.459,0.72,4.881,1.526l35.061-35.385h0l0.1-.1L379.83,400.8l0,0L424.5,355.787l-2,.011-30.112,30.293-1.444.008L365.59,411.45h-1.945ZM464.121,445.6L449.6,460.242c-0.284-.379-0.566-0.76-0.851-1.139l-17.408,17.4h-2.818L401.11,503.613q1.527,2.269,2.961,4.6l40.982-41.36h0l3.418-3.45,1.993-2.012h0l15.658-15.8Zm-47.17-20.072-10.244,10.32h-2.4l-34.861,34.469c0.925,0.692,1.835,1.4,2.74,2.12l-6.58,6.628h2.011l5.687-5.74h0l45.668-46.092h0l60.712-61.284-2,.011-37.768,38.111-1.678.009-21.268,21.461Z" transform="translate(-38.938 -345.344)"></path></svg>                  
                  </svg>                  
                </div>
                <div className="ut-bio-details_group">
                  <div className="ut-bio-details_headings">
                    <h2 className="ut-bio-details_header--player-name">{thisPlayer['Chinese Name']}</h2>
                    <h3 className="ut-bio-details_header--item-type">{seasonNameMap[thisPlayer['Season']]}</h3>
                  </div>
                  <div className="ut-bio-prices">
                    <div>
                      <h3 className="boost-header">训练</h3>
                      <InputRange
                        maxValue={100}
                        minValue={this.state.baseOVR}
                        value={thisPlayer.Overall}
                        onChange={this.handleTrain}
                      />
                    </div>
                    <div>
                      <h3 className="boost-header">加成</h3>
                      <InputRange
                        maxValue={20}
                        minValue={0}
                        value={this.state.boost}
                        onChange={this.handleBoost}
                      />
                    </div>
                  </div>
                  <div className="ut-bio-details_stats ut-grid-view">
                    <div className="ut-grid-view_item">
                      <table className="ut-bio-stats_data">
                        <tbody>
                          <tr className="ut-bio-stats_data-row">
                            <th className="ut-bio-stats_data-type">身高</th>
                            <td className="ut-bio-stats_data-value">{thisPlayer.Height} 厘米</td>
                          </tr>
                          <tr className="ut-bio-stats_data-row">
                            <th className="ut-bio-stats_data-type">惯用脚</th>
                            <td className="ut-bio-stats_data-value">{thisPlayer['Strong Foot']}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ut-grid-view_item">
                      <table className="ut-bio-stats_data">
                        <tbody>
                          <tr className="ut-bio-stats_data-row">
                            <th className="ut-bio-stats_data-type">俱乐部</th>
                            <td className="ut-bio-stats_data-value">{thisPlayer.Club}</td>
                          </tr>
                          <tr className="ut-bio-stats_data-row">
                            <th className="ut-bio-stats_data-type">联赛</th>
                            <td className="ut-bio-stats_data-value">{thisPlayer.League}</td>
                          </tr>
                          <tr className="ut-bio-stats_data-row">
                            <th className="ut-bio-stats_data-type">国籍</th>
                            <td className="ut-bio-stats_data-value">{thisPlayer.Nation}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ut-body-inner ut-body-inner--fixed">
            <div className="ut-bio-stats ut-grid-view">
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">双速</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Pace'])}`}>{thisPlayer.Pace}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Pace'])}`} height="100%" width={`${thisPlayer.Pace}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Acceleration'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">加速</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Acceleration'])}`}>{thisPlayer['Acceleration']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Sprint Speed'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">速度</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Sprint Speed'])}`}>{thisPlayer['Sprint Speed']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              { thisPlayer['Position'] === 'GK'
              ?
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">守门</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['GK Diving'])}`}></span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['GK Diving'])}`} height="100%" width={`${thisPlayer['GK Diving']}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['GK Diving'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">门将鱼跃扑球</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['GK Diving'])}`}>{thisPlayer['GK Diving']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['GK Positioning'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">门将站位</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['GK Positioning'])}`}>{thisPlayer['GK Positioning']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Reflexes'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">门将反应</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Reflexes'])}`}>{thisPlayer['Reflexes']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Handling'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">手控球</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Handling'])}`}>{thisPlayer['Handling']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              :
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">射门</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Shooting'])}`}>{thisPlayer.Shooting}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Shooting'])}`} height="100%" width={`${thisPlayer.Shooting}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Finishing'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">终结能力</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Finishing'])}`}>{thisPlayer['Finishing']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Long Shot'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">远射</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Long Shot'])}`}>{thisPlayer['Long Shot']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Shot Power'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">射门力量</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Shot Power'])}`}>{thisPlayer['Shot Power']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Positioning'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">进攻跑位</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Positioning'])}`}>{thisPlayer['Positioning']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              }
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">传球</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Passing'])}`}>{thisPlayer.Passing}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Passing'])}`} height="100%" width={`${thisPlayer.Passing}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Crossing'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">传中</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Crossing'])}`}>{thisPlayer['Crossing']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Short Passing'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">短传</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Short Passing'])}`}>{thisPlayer['Short Passing']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Long Passing'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">长传</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Long Passing'])}`}>{thisPlayer['Long Passing']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Free Kick'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">任意球</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Free Kick'])}`}>{thisPlayer['Free Kick']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">灵活</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Agility'])}`}>{thisPlayer.Agility}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Agility'])}`} height="100%" width={`${thisPlayer.Agility}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Awareness'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">意识</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Awareness'])}`}>{thisPlayer['Awareness']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Reactions'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">反应</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Reactions'])}`}>{thisPlayer['Reactions']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Ball Control'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">控球</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Ball Control'])}`}>{thisPlayer['Ball Control']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Dribbling'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">盘带</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Dribbling'])}`}>{thisPlayer['Dribbling']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Composure'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">沉着</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Composure'])}`}>{thisPlayer['Composure']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">防守</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Defending'])}`}>{thisPlayer.Defending}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Defending'])}`} height="100%" width={`${thisPlayer.Defending}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Heading'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">头球</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Heading'])}`}>{thisPlayer['Heading']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Marking'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">人盯人</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Marking'])}`}>{thisPlayer['Marking']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Tackling'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">抢断</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Tackling'])}`}>{thisPlayer['Tackling']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ut-bio-stats_item ut-grid-view_item">
                <div className="ut-bio-stats_header">
                  <h6 className="ut-bio-stats_title">
                    <span className="ut-bio-stats_title-type">体格</span>
                    <span className={`ut-bio-stats_title-value ut-bio-stats_title-value--${statColor(thisPlayer['Physical'])}`}>{thisPlayer.Physical}</span>
                  </h6>
                  <svg className="ut-bio-stats_graph">
                    <rect className={`ut-bio-stats_graph-bar ut-bio-stats_graph-bar--${statColor(thisPlayer['Physical'])}`} height="100%" width={`${thisPlayer.Physical}%`}></rect>
                  </svg>
                </div>
                <table className="ut-bio-stats_data">
                  <tbody>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Strength'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">强壮</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Strength'])}`}>{thisPlayer['Strength']}</td>
                    </tr>
                    <tr className={`ut-bio-stats_data-row ${this.state.boost > 0 && this.state.boostActive['Aggression'] ? 'active' : ''}`}>
                      <th className="ut-bio-stats_data-type">积极性</th>
                      <td className={`ut-bio-stats_data-value ut-bio-stats_data-value--${statColor(thisPlayer['Aggression'])}`}>{thisPlayer['Aggression']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Player
