import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import { connect } from 'react-redux'
import { fetchDailyMessage } from './actions'
import css from './index.css'

class Homepage extends Component {
  componentDidMount() {
    this.props.getMessage()
  }

  render() {
    const { messageOfTheDay } = this.props

    return (
      <div styleName="homepage-container">
        <div styleName="daily-message">
          {messageOfTheDay}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messageOfTheDay: state.homepage.messageOfTheDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessage: () => {
      dispatch(fetchDailyMessage())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Homepage, css))
