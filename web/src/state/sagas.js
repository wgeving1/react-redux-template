import HomePageSagas from '../pages/home/actions'
import LoginPageSagas from '../pages/login/actions'
import LandingPageSagas from '../pages/landing/actions'
import GamePageSagas from '../pages/game/actions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(LoginPageSagas)
    .concat(HomePageSagas)
    .concat(LandingPageSagas)
    .concat(GamePageSagas)
  yield all(sagas)
}
