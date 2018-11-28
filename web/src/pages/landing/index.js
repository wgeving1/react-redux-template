import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import {
  verifyUserUpdateRequest,
  verifyUserUpdateUsernameRequest,
  fetchOnlineFriendsRequest,
  fetchOnlineUsersRequest
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

  componentDidMount () {
    if(typeof this.props.user !== 'undefined') {
      this.props.fetchOnlineFriends(this.props.user.userHandle);
      this.props.fetchOnlineUsers(this.props.user.userHandle);
    } else {
      //this code should be removed and is for demo purposes
      this.props.fetchOnlineFriends('ba1842c0-9a68-4c63-821b-7caa582be387');
      this.props.fetchOnlineUsers('ba1842c0-9a68-4c63-821b-7caa582be387');
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
    // if(typeof this.props.user === 'undefined') {
    //   return <Redirect to="/login"/>
    // }

    if(this.props.loading)
      return(
        <div>I getting stuff...wait!!!</div>
      )


    return
    (<div>hello</div>)
    return (
      <div styleName="content">
        <div styleName="profile-info">
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
        <div>
          <div styleName="users-online">
            Online Users
            {
              //todo replace this
              this.props.onlineUsers.map((user, i) => (
                <Link to={`game/95aee991-cdd7-4f0b-b40d-4b83a03dcd6e`} key={i}>
                  {user.username}
                </Link>
              )
            )}
          </div>
          <div styleName="friends-online">
            Online Friends
            {
              this.props.onlineFriends.map((user, i) => (
                <div key={i}>{user.username}</div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginpage.user,
    loading: state.loginpage.loading,
    onlineFriends: state.landingpage.onlineFriends,
    onlineUsers: state.landingpage.onlineUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserEmail: (handle, email) => {
      dispatch(verifyUserUpdateRequest(handle, email))
    },
    changeUsername: (handle, name) => {
      dispatch(verifyUserUpdateUsernameRequest(handle, name))
    },
    fetchOnlineFriends: (handle) => {
      dispatch(fetchOnlineFriendsRequest(handle))
    },
    fetchOnlineUsers: (handle) => {
      dispatch(fetchOnlineUsersRequest(handle))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Landing, css))
