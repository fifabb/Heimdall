import React, { Component } from 'react'
import MdSearch from 'react-icons/lib/md/search'

import database from '../database'

class FilterBar extends Component {
  constructor () {
    super()

    this.state = {
      playerName: ''
    }
  }

  render () {
    return (
      <div>
        <form className="filter-form" action="">
          <div className="form-group align-right button-wrapper">
            <button type="button" className="button button-default">重置</button>
            <button type="button" className="button button-primary" onClick={this.props.handleSearch.bind(this, this.state.playerName)}>搜索</button>
          </div>
          <div className="form-group">
            <MdSearch className="query-name--icon" size={28} />
            <input type="search" className="query-name" placeholder="请输入球员名"
              value={this.state.playerName}
              onInput={(e) => this.setState({ playerName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <h3>位置</h3>
            {
              database.position.map((item, i) => (
                <div className="sub-title" key={i}>
                  <h4>{item.label}</h4>
                  <ul className="filter-item-wrap">
                    {
                      item.children.map((pos, j) => (
                        <li className="filter-item" key={j}>
                          <span className="pos-label">{pos.label}</span>
                          <span className="pos-name">{pos.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="form-group">
            <h3>球员类型</h3>
            <ul className="filter-item-wrap">
            {
              database.season.map((item, i) => (
                <li className="filter-item" key={i}>
                  <span className="pos-name">{item.name}</span>
                </li>
              ))
            }
            </ul>
          </div>
          <div className="form-group">
            <h3>能力值</h3>
            <div className="ability-wrap">
              <div className="ability overall">
                <span className="ability-label">总评</span>
                <div className="ability-range">
                  <input type="text" placeholder="1" />
                  <input type="text" className="after" placeholder="120" />
                </div>
              </div>
              <h4>全部球员</h4>
              <ul className="ability-container">
              {
                database.ability.ffm.all.map((item) => (
                  <li className="ability">
                    <span className="ability-label">{item.label}</span>
                    <div className="ability-range">
                      <input type="text" placeholder="1" />
                      <input type="text" className="after" placeholder="140" />
                    </div>
                  </li>
                ))
              }
              </ul>
              <h4>门将</h4>
              <ul className="ability-container">
              {
                database.ability.ffm.gk.map((item) => (
                  <li className="ability">
                    <span className="ability-label">{item.label}</span>
                    <div className="ability-range">
                      <input type="text" placeholder="1" />
                      <input type="text" className="after" placeholder="140" />
                    </div>
                  </li>
                ))
              }
              </ul>
              <h4>详细能力</h4>
              <ul className="ability-container">
              {
                database.ability.ffm.advanced.map((item) => (
                  <li className="ability">
                    <span className="ability-label">{item.label}</span>
                    <div className="ability-range">
                      <input type="text" placeholder="1" />
                      <input type="text" className="after" placeholder="140" />
                    </div>
                  </li>
                ))
              }
              </ul>
            </div>
          </div>
          <div className="form-group">
            <h3>国家/地区</h3>
            {
              database.nation.map((item, i) => (
                <div className="sub-title" key={i}>
                  <h4>{item.cname}</h4>
                  <ul className="filter-item-wrap">
                  {
                    item.children.map((nation) => (
                      <li className="filter-item">
                        <span className="ability-label">{nation.cname}</span>
                      </li>
                    ))
                  }
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="form-group">
            <h3>所属联赛/俱乐部</h3>
            <select name="" id=""></select>
          </div>
          <div className="form-group">
            <h3>身高</h3>
            <select name="" id=""></select>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBar
