import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import css from './index.css'
import { fetchGameData } from './actions'

//go to localhost:3000/game/95aee991-cdd7-4f0b-b40d-4b83a03dcd6e
class GamePage extends Component {
  componentDidMount() {
    const { tag } = this.props.match.params
    this.props.getGameData(tag)
  }

  render() {
    if(this.props.players.length === 0) {
      return <div>Loading...</div>
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
    players: state.gamepage.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGameData: (tag) => {
      dispatch(fetchGameData(tag))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(GamePage, css)))
