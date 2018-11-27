import { call, put, takeLatest } from 'redux-saga/effects'
import * as axiosWrapper from '../../utilities/axios/wrapper'

export function fetchGameData(tag, handle) {
  return {
    type: 'FETCH_GAME_DATA_REQUEST',
    tag,
    handle
  }
}

export function* executeFetchGameData({ tag, handle }) {
  const url = `/games/${tag}/`
  try {
    const requestFunc = (url) => axiosWrapper.get(url)
    const res = yield call(requestFunc, url)
    yield put(fetchGameDataSuccess(res.data, handle))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchGameDataSuccess({ gameData }, handle) {
  return {
    type: 'FETCH_GAME_DATA_SUCCESS',
    gameData,
    handle
  }
}

const sagas = [
  takeLatest('FETCH_GAME_DATA_REQUEST', executeFetchGameData)
]

export default sagas
