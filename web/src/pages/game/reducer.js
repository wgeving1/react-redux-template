export const initialState = {
  players: [],
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_GAME_DATA_SUCCESS':
      return {
        ...state,
        players: action.gameData
      }
    default:
      return state
  }
}
