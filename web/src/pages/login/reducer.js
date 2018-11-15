export const initialState = {
  user: undefined,
  loading: false
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
        user: action.user,
        loading: false
      }
    case 'VERIFY_USERNAME_UPDATE_REQUEST':
    case 'VERIFY_USER_UPDATE_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'VERIFY_USERNAME_UPDATE_SUCCESS':
      return {
        ...state,
        user: action.user,
        loading: false
      }
    default:
      return state
  }
}
