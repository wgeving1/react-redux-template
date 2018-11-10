export const initialState = {
  user: undefined,
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'VERIFY_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      }
    case 'VERIFY_USER_UPDATE_SUCCESS':
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
