import { call, put, takeLatest } from 'redux-saga/effects'
import * as axiosWrapper from '../../utilities/axios/wrapper'

export function verifyUserUpdateRequest(handle, email) {
  return {
    type: 'VERIFY_USER_UPDATE_REQUEST',
    handle,
    email
  }
}

export function* executeUpdateUserEmail({ handle, email }) {
  const url = `/users/${handle}/email`
  console.log('Saga ---', email)
  try {
    const request = (url, body) => axiosWrapper.post(url, body)
    const res = yield call(request, url, ({ email }))
    console.log('results', res)
    yield put(verifyUserUpdateSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function verifyUserUpdateSuccess(data) {
  return {
    type: 'VERIFY_USER_UPDATE_SUCCESS',
    user: data.user
  }
}

const sagas = [
  takeLatest('VERIFY_USER_UPDATE_REQUEST', executeUpdateUserEmail)
]

export default sagas
