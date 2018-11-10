import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { verifyUserUpdateRequest } from './actions'

import css from './index.css'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: !props.user ? '' : props.user.email
    }

  }
  handleEmailInputChange = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handleChangeUser = (e) => {
    e.preventDefault()
    this.props.changeUserEmail(this.props.user.userHandle, this.state.email)
  }

  render() {
    if(typeof this.props.user === 'undefined') {
      return <Redirect to="/login"/>
    }

    return (
      <div styleName="content">
        <div>
          Hi there {this.props.user.firstName}, your email is: {this.props.user.email}
        </div>
        <input type="text"
               value={this.state.email}
               placeholder="Email..."
               onChange={this.handleEmailInputChange} />
        <button onClick={this.handleChangeUser} >Change Me</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginpage.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserEmail: (handle, email) => {
      dispatch(verifyUserUpdateRequest(handle, email))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Landing, css))
