import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import {
  verifyUserUpdateRequest,
  verifyUserUpdateUsernameRequest
} from './actions'

import css from './index.css'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: !props.user ? '' : props.user.email,
      username: !props.user ? '' : props.user.username
    }
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.user !== undefined) {
      if(typeof nextProps.user.username !== undefined && nextProps.user.username != this.props.user.username) {
        this.setState({username: nextProps.user.username})
      }
      if(nextProps.user.email != this.props.user.email) {
        this.setState({username: nextProps.user.email})
      }
    }
  }
  handleUsernameInputChange = (e) => {
    e.preventDefault()
    this.setState({username: e.target.value})
  }
  handleEmailInputChange = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handleChangeUser = (e) => {
    e.preventDefault()
    if(this.props.user.email !== this.state.email)
      this.props.changeUserEmail(this.props.user.userHandle, this.state.email)
    if(this.props.user.username !== this.state.username)
      this.props.changeUsername(this.props.user.userHandle, this.state.username)
  }

  render() {
    if(typeof this.props.user === 'undefined') {
      return <Redirect to="/login"/>
    }

    if(this.props.loading)
      return(
        <div>I getting stuff...wait!!!</div>
      )

    return (
      <div styleName="content">
        <div>
          Hi there {this.props.user.firstName}, or should I say {this.props.user.username} your email is: {this.props.user.email}
        </div>
        <div>
          Username:
          <input type="text"
               value={this.state.username}
               placeholder="Username..."
               onChange={this.handleUsernameInputChange} />
        </div>
        <div>
          Email:
          <input type="text"
               value={this.state.email}
               placeholder="Email..."
               onChange={this.handleEmailInputChange} />
        </div>
        <button onClick={this.handleChangeUser} >Change Me</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginpage.user,
    loading: state.loginpage.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserEmail: (handle, email) => {
      dispatch(verifyUserUpdateRequest(handle, email))
    },
    changeUsername: (handle, name) => {
      dispatch(verifyUserUpdateUsernameRequest(handle, name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Landing, css))
