//TODO trigger the verify user action when the user clicks the Login button...also
//cause the page to redirect to the landing page once the user has logged in.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { Button, Icon, Input } from 'semantic-ui-react'

import css from './index.css'
import { verifyUserRequest } from './actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleClick = () => {
    const { email, password } = this.state
    this.props.logInUser(email, password)
  }

  render() {
    console.log("Props", this.props)
    return (
      <div>
        <div styleName="title">Welcome to Helio Challenges</div>
        <div styleName="description"> Sign in with your information below</div>
        <form styleName="form">
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Enter Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <Button type="button" animated color="green" onClick={this.handleClick}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginpage.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (email, password) => {
      dispatch(verifyUserRequest(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Login, css))
