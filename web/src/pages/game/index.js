import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import css from './index.css'

class GamePage extends Component {
  render() {
    console.log("The url parm is:", this.props.match.params.tag)
    return (
      <div >
        On the game page
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     messageOfTheDay: state.homepage.messageOfTheDay
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getMessage: () => {
//       dispatch(fetchDailyMessage())
//     }
//   }
// }
export default withRouter(connect(null, null)(CSSModules(GamePage, css)))
