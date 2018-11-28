import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import css from './index.css'
import { fetchGameData } from './actions'

//go to localhost:3000/game/95aee991-cdd7-4f0b-b40d-4b83a03dcd6e
class GamePage extends Component {
  componentDidMount() {
    if(typeof this.props.user !== 'undefined') {
      const { tag } = this.props.match.params
      this.props.getGameData(tag, this.props.user.userHandle)
    }
  }

  render() {
    if(typeof this.props.user === 'undefined') {
      return <Redirect to="/login"/>
    }

    if(this.props.players.length === 0 && !this.props.unauth) {
      return <div>Loading...</div>
    }

    if(this.props.unauth) {
      return <div>get out here</div>
    }
    return (
      <div >
        {this.props.players[0].username} vs {this.props.players[1].username}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.gamepage.players,
    unauth: state.gamepage.unauth,
    user: state.loginpage.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGameData: (tag, handle) => {
      dispatch(fetchGameData(tag, handle))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(GamePage, css)))
