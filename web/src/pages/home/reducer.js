export const initialState = {
  messageOfTheDay: '',
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_DAILY_MESSAGE_SUCCESS':
      return {
        ...state,
        messageOfTheDay: action.message
      }
    default:
      return state
  }
}
