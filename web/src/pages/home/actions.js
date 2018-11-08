import { call, put, takeLatest } from 'redux-saga/effects'
import * as axiosWrapper from '../../utilities/axios/wrapper'

export function fetchDailyMessage() {
  return {
    type: 'FETCH_DAILY_MESSAGE_REQUEST'
  }
}

export function* executeFetchDailyMessage() {
  const url = `/reviews/favorable/`
  try {
    const requestFunc = (url) => axiosWrapper.get(url)
    const res = yield call(requestFunc, url)
    yield put(fetchSuccess(res.data.message))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess(message) {
  return {
    type: 'FETCH_DAILY_MESSAGE_SUCCESS',
    message: message
  }
}
const sagas = [
  takeLatest('FETCH_DAILY_MESSAGE_REQUEST', executeFetchDailyMessage)
]

export default sagas
