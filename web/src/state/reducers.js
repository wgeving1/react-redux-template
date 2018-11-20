import { combineReducers } from 'redux'

import homepage from '../pages/home/reducer'
import loginpage from '../pages/login/reducer'
import landingpage from '../pages/landing/reducer'
import gamepage from '../pages/game/reducer'

const appReducer = combineReducers({
  homepage,
  loginpage,
  landingpage,
  gamepage
})

export default (state, action) => {
  if (action.type === 'RESET_ALL_USER_DATA_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}
