import { call, put, takeLatest } from 'redux-saga/effects'
import * as axiosWrapper from '../../utilities/axios/wrapper'

export function verifyUserUpdateRequest(handle, email) {
  return {
    type: 'VERIFY_USER_UPDATE_REQUEST',
    handle,
    email
  }
}

export function verifyUserUpdateUsernameRequest(handle, username) {
  return {
    type: 'VERIFY_USERNAME_UPDATE_REQUEST',
    handle,
    username
  }
}

export function* executeUpdateUserEmail({ handle, email }) {
  const url = `/users/${handle}/email`
  try {
    const request = (url, body) => axiosWrapper.put(url, body)
    const res = yield call(request, url, ({ email }))
    yield put(verifyUserUpdateSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function* executeUpdateUsername({ handle, username }) {
  const url = `/users/${handle}/username`
  try {
    const request = (url, body) => axiosWrapper.put(url, body)
    const res = yield call(request, url, ({ username: username }))
    yield put(verifyUsernameUpdateSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function verifyUsernameUpdateSuccess(data) {
  return {
    type: 'VERIFY_USERNAME_UPDATE_SUCCESS',
    user: data.user
  }
}

export function verifyUserUpdateSuccess(data) {
  return {
    type: 'VERIFY_USER_UPDATE_SUCCESS',
    user: data.user
  }
}


export function fetchOnlineFriendsRequest(handle) {
  return {
    type: 'FETCH_ONLINE_FRIENDS_REQUEST',
    handle
  }
}

export function* executeFetchOnlineFriendsRequest({ handle }) {
  const url = `/users/online/${handle}/friends`
  try {
    const request = (url) => axiosWrapper.get(url)
    const res = yield call(request, url)
    yield put(fetchOnlineFriendsSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchOnlineFriendsSuccess(data) {
  console.log("Online Friends", data)
  return {
    type: 'FETCH_ONLINE_FRIENDS_SUCCESS',
    onlineFriends: data.onlineFriends
  }
}

export function fetchOnlineUsersRequest(handle) {
  return {
    type: 'FETCH_ONLINE_USERS_REQUEST',
    handle
  }
}

export function* executeFetchOnlineUsersRequest({ handle }) {
  const url = `/users/online/${handle}`
  try {
    const request = (url) => axiosWrapper.get(url)
    const res = yield call(request, url)
    yield put(fetchOnlineUsersSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchOnlineUsersSuccess(data) {
  console.log("Online Users", data)
  return {
    type: 'FETCH_ONLINE_USERS_SUCCESS',
    onlineUsers: data.onlineUsers
  }
}

const sagas = [
  takeLatest('VERIFY_USER_UPDATE_REQUEST', executeUpdateUserEmail),
  takeLatest('VERIFY_USERNAME_UPDATE_REQUEST', executeUpdateUsername),
  takeLatest('FETCH_ONLINE_USERS_REQUEST', executeFetchOnlineUsersRequest),
  takeLatest('FETCH_ONLINE_FRIENDS_REQUEST', executeFetchOnlineFriendsRequest)
]

export default sagas
