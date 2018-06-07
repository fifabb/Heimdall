import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MdNavigateNext from 'react-icons/lib/md/navigate-next'

import FilterBar from './FilterBar'
import BBSearch from './BBSearch'

import allPlayers from '../players'
import { seasonNameMap } from '../utils/season'

const StaticHost = 'http://fifa.waochina.com'

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

allPlayers.forEach((player) => {
  if (player['Position'] === 'GK') {
    calGKAttr(player)
  } else {
    calSixAttr(player)
  }
})

class List extends Component {
  constructor () {
    super()

    this.state = {
      playerList: allPlayers
    }
  }

  handleSearch = (playerName) => {
    const playerList = allPlayers.filter((player) => {
      return player['Chinese Name'].indexOf(playerName) !== -1
    })

    this.setState({
      playerList
    })
  }

  render() {
    return (
      <div className="container">
        <article className="player-list">
          <article className="body-outer">
            <div className="body-inner ut-body-inner--fixed ut-body-inner--fixed-plus">
              <div className="ut-search_results ut_underlay">
                <div className="ut-search_results-controls ut-body-inner--fixed-plus ut-search_results-controls--list-view"></div>
                <ul className="ut-item-list-view js-ut-item-list-view--active">
                {this.state.playerList.map((player, i) =>
                  <li key={i} className="ut-item-list-view_row ut-item-list-view_row--active ut-item-stripe ut-item-stripe--bg-toty">
                    <Link to={`/player/${player.Season}${player.ID}`}>
                      <span className="ut-item-list-view_row-link">
                        <div className="ut-item-list-view_details">
                          <div className="ut-item_affiliation--list-view player-id">
                            {/*<img src={`${StaticHost}/images/player/${player.ID}.png`} />*/}
                            <img src={`https://futhead.cursecdn.com/static/img/fm/18/players/${player.ID}.png`} />
                          </div>
                          {/*<div className="ut-item_affiliation--list-view player-season">
                            <img src={`${StaticHost}/images/season/${player.Season}.png`} />
                          </div>*/}
                          <h2 className="ut-item_heading ut-item_heading--list-view">
                            {player['Chinese Name']}
                            <div>
                              <span className="ut-item_heading-sub">{seasonNameMap[player['Season']]}</span>
                              <span className="ut-item_heading-sub team"> | {player['League']}</span>
                              <span className="ut-item_heading-sub team"> | {player['Club']}</span>
                            </div>
                          </h2>
                        </div>
                        <div className="ut-item-list-view_stats-container ut-scroll-view">
                          <div className="ut-scroll-view_content">
                            <div scroll-view-marker="Player Stats" className="ut-item-list-view_stats">
                              <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                <span className="ut-item_stat ut-item_stat--label">总评</span>
                                  <span className="ut-item_stat ut-item_stat--num">{player['Overall']}</span>
                              </div>
                              <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                <span className="ut-item_stat ut-item_stat--label">位置</span>
                                <span className="ut-item_stat ut-item_stat--num">{player['Position']}</span>
                              </div>
                              { player['Position'] === 'GK'
                                ? <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">扑救</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['GK Diving']}</span>
                                  </div>
                                : <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">步频</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Pace']}</span>
                                  </div> }
                              { player['Position'] === 'GK'
                                ? <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">GK站位</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['GK Positioning']}</span>
                                  </div>
                                : <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">射门</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Shooting']}</span>
                                  </div> }
                              { player['Position'] === 'GK'
                                ? <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">手控球</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Handling']}</span>
                                  </div>
                                : <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">传球</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Passing']}</span>
                                  </div> }
                              { player['Position'] === 'GK'
                                ? <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">GK反应</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Reflexes']}</span>
                                  </div>
                                : <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">灵活</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Agility']}</span>
                                  </div> }
                              { player['Position'] === 'GK'
                                ? <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">传球</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Passing']}</span>
                                  </div>
                                : <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                    <span className="ut-item_stat ut-item_stat--label">防守</span>
                                    <span className="ut-item_stat ut-item_stat--num">{player['Defending']}</span>
                                  </div> }
                              <div className="ut-item-list-view_stat ut-item-list-view_stat--primary">
                                <span className="ut-item_stat ut-item_stat--label">体格</span>
                                <span className="ut-item_stat ut-item_stat--num">{player['Physical']}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ut-item-list-view_prices-container">
                          <span className="ut-item-list-view_row-action">
                            <MdNavigateNext size={28} />
                          </span>
                        </div>
                      </span>
                    </Link>
                  </li>
                )}
                </ul>
                <ul className="discover-bar"></ul>
              </div>
            </div>
          </article>
        </article>
        <aside className="filter-bar active">
          <FilterBar handleSearch={this.handleSearch} />
        </aside>
      </div>
    )
  }
}

export default List
