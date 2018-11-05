import HomePageSagas from '../pages/home/actions'
import LoginPageSagas from '../pages/login/actions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(LoginPageSagas)
    .concat(HomePageSagas)
  yield all(sagas)
}
