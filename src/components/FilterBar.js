import React, { Component } from 'react'
import MdSearch from 'react-icons/lib/md/search'

import '../css/filter_bar.less'

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
          <div className="form-group button-wrapper">
            <MdSearch className="query-name--icon" size={28} />
            <input type="search" className="query-name" placeholder="请输入球员名"
              value={this.state.playerName}
              onInput={(e) => this.setState({ playerName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <h3>位置</h3>
            <div className="form-item">
              <select name="position">
                <option value="">-- 位置 --</option>
              {
                database.position.map((item, i) => (
                  <optgroup label={`:: ${item.label} ::`} key={i}>
                  {
                    item.children.map((pos, j) => (
                      <option value={pos.label} key={j}>{`${pos.label} ${pos.name}`}</option>
                    ))
                  }
                  </optgroup>
                ))
              }
              </select>
            </div>
          </div>
          <div className="form-group">
            <h3>球员类型</h3>
            <div className="form-item">
              <select name="season">
                <option value="">-- 球员类型 --</option>
              {
                database.season.map((item, i) => (
                  <option value={item.id} key={i}>{item.name}</option>
                ))
              }
              </select>
            </div>
          </div>
          <div className="form-group">
            <h3>能力值</h3>
            <div className="form-item">
              <div className="ability-range">
                <input type="text" />
                <input type="text" className="after" />
              </div>
              <div className="ability-range">
                <select name="">
                  <option value="">-- 能力值一 --</option>
                </select>
                <input type="text" />
                <input type="text" className="after" />
              </div>
              <div className="ability-range">
                <select name="">
                  <option value="">-- 能力值二 --</option>
                </select>
                <input type="text" />
                <input type="text" className="after" />
              </div>
              <div className="ability-range">
                <select name="">
                  <option value="">-- 能力值三 --</option>
                </select>
                <input type="text" />
                <input type="text" className="after" />
              </div>
              <div className="ability-range">
                <select name="">
                  <option value="">-- 能力值四 --</option>
                </select>
                <input type="text" />
                <input type="text" className="after" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <h3>国家/地区</h3>
            <div className="form-item">
              <select name="">
                <option value="">-- 大洲 --</option>
              {
                database.nation.map((item, i) => (
                  <option value={item.cname} key={i}>{item.cname}</option>
                ))
              }
              </select>
              <select name="nation">
                <option value="">-- 国家/地区 --</option>
              {
                database.nation.map((item, i) => (
                  <optgroup label={`:: ${item.cname} ::`} key={i}>
                  {
                    item.children.map((nation, j) => (
                      <option value={nation.id} key={j}>{nation.cname}</option>
                    ))
                  }
                  </optgroup>
                ))
              }
              </select>
            </div>
          </div>
          <div className="form-group">
            <h3>联赛/俱乐部</h3>
            <div className="form-item">
              <select name="">
                <option value="">-- 联赛 --</option>
              </select>
              <select name="">
                <option value="">-- 俱乐部 --</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <h3>天赋</h3>
            <div className="form-item">
              <select name="" id=""></select>
            </div>
          </div>
          <div className="form-group">
            <h3>逆足</h3>
            <div className="form-item">
              <select name="" id=""></select>
            </div>
          </div>
          <div className="form-group">
            <h3>身高</h3>
            <div className="form-item">
              <div className="ability-range">
                <input type="text" />
                <input type="text" className="after" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBar
