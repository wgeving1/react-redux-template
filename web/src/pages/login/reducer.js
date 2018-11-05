export const initialState = {
  loggedIn: false,
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'VERIFY_USER_SUCCESS':
      return {
        ...state,
        loggedIn: true
      }
    default:
      return state
  }
}
