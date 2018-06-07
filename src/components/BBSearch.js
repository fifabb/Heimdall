import React, { Component } from 'react'
import './components.css'
import './BBSearch.less'

import MdSearch from 'react-icons/lib/md/search'
import MdExpandMore from 'react-icons/lib/md/expand-more'

class BBSider extends Component {
  constructor () {
    super()

    this.state = {
      playerName: ''
    }
  }

  render() {
    return (
      <div className="bb-search-container ut-header ut-body-inner ut-body-inner--fixed ut-underlay">
        <h1 className="ut-heading ut-heading--page">搜索</h1>
        <div className="ut-search">
          <div className="ut-form ut-search_form">
            <div className="ut-search_form-group">
              <input
                className="ut-form_field ut-search_field"
                type="search"
                value={this.state.playerName}
                onInput={(e) => this.setState({ playerName: e.target.value })}
                placeholder="搜索球员..."
              />
              <a className="ut-btn btn ut-btn--search" onClick={this.props.handleSearch.bind(this, this.state.playerName)}>
                <span className="ut-icon ut-icon-mannifying-glass">
                  <MdSearch size={28} />
                </span>
                <span className="ut-btn_text">搜索</span>
              </a>
            </div>
            <a className="ut-btn btn btn--alternative ut-btn--filter" style={{display: 'none'}}>
              <span className="ut-btn_text">高级搜索</span>
              <span className="ut-icon">
                <MdExpandMore size={28} />
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default BBSider
