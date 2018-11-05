import { call, put, takeLatest } from 'redux-saga/effects'
import * as axiosWrapper from '../../utilities/axios/wrapper'

export function verifyUserRequest(email, password) {
  return {
    type: 'VERIFY_USER_REQUEST',
    email,
    password,
  }
}

export function* executeVerifyUser({ email, password }) {
  const url = `/auth/login`
  try {
    const request = (url, body) => axiosWrapper.post(url, body)
    const res = yield call(request, url, ({ email, password}))
    yield put(verifyUserSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function verifyUserSuccess(data) {
  return {
    type: 'VERIFY_USER_SUCCESS',
    user: data.user,
    admin: data.admin
  }
}

const sagas = [
  takeLatest('VERIFY_USER_REQUEST', executeVerifyUser)
]

export default sagas
