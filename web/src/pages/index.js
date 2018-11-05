import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import Home from './home/'
import Login from './login/'


class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          Header Stuff <Link to="/login">Login</Link>
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
          </Switch>
        </div>
        <div styleName="footer-container">
          Footer Things Here
        </div>
      </div>
    )
  }
}

export default CSSModules(App, css)
