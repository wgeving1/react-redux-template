import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { verifyUserUpdateRequest } from './actions'

import css from './index.css'

class Landing extends Component {
  handleChangeUser = (e) => {
    e.preventDefault()
    this.props.changeUser(this.props.user.userHandle, 'my-new-email@gmailcom')
  }

  render() {
    if(typeof this.props.user === 'undefined') {
      return <Redirect to="/login"/>
    }

    return (
      <div styleName="content">
        Hi there {this.props.user.firstName}
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
    changeUser: (weNeedStuff) => {
      dispatch(verifyUserUpdateRequest(weNeedStuff))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Landing, css))
