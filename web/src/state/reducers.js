import { combineReducers } from 'redux'

import homepage from '../pages/home/reducer'
import loginpage from '../pages/login/reducer'

const appReducer = combineReducers({
  homepage,
  loginpage
})

export default (state, action) => {
  if (action.type === 'RESET_ALL_USER_DATA_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}
