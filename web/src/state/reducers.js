import { combineReducers } from 'redux'

import user from '../process/users/reducer'
import homepage from '../ui/pages/homepage/reducer'
import homepage from '../ui/pages/homepage/reducer'

const appReducer = combineReducers({
  user,
  homepage
})

export default (state, action) => {
  if (action.type === 'RESET_ALL_USER_DATA_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}
