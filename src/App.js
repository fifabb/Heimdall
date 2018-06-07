import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './css/primer.css'
import './css/fut.css'
import './css/fut-sprites.css'
import './css/brand.css'
import './App.less'

import List from './components/List'
import Player from './components/Player'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="app-header eas-nav eas-nav--closed eas-nav--has-solid eas-nav--dark">
            <div className="eas-nav-vertical eas-nav-vertical--solid eas-nav-vertical--dark">
              <span className="eas-nav_link eas-nav_logo-link eas-nav-vertical_logo-link eas-nav-vertical_logo-link--solid eas-nav-vertical_logo-link--dark">FIFA BB</span>
            </div>
          </header>

          <Route exact path="/" component={List} />
          <Route path="/player/:id" component={Player} />

          <main className="app-body container-outer">
            <div className="container-inner">
              <footer className="footer-global-outer">
                <div className="footer-global-inner">
                  <div className="section section-footer-global">
                    <p style={{fontSize: '.65rem', color: '#eaeaea'}}>Hosted by <a href="https://pages.coding.me" style={{fontWeight: 'bold', color: '#eaeaea'}}>Coding Pages</a></p>
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
