export const initialState = {
  onlineUsers: [],
  onlineFriends: []
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_ONLINE_FRIENDS_SUCCESS':
      return {
        ...state,
        onlineFriends: action.onlineFriends
      }
    case 'FETCH_ONLINE_USERS_SUCCESS':
      return {
        ...state,
        onlineUsers: action.onlineUsers
      }
    default:
      return state
  }
}
