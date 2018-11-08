import HomePageSagas from '../pages/home/actions'
import LoginPageSagas from '../pages/login/actions'
import LandingPageSagas from '../pages/landing/actions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(LoginPageSagas)
    .concat(HomePageSagas)
    .concat(LandingPageSagas)
  yield all(sagas)
}
