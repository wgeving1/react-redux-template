export const initialState = {
  players: [],
  unauth: false
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_GAME_DATA_SUCCESS':
      if(
        action.handle !== action.gameData[0].userhandle &&
        action.handle !== action.gameData[1].userhandle) {
        return {
          ...state,
          unauth: true
         }
      }

      return {
        ...state,
        players: action.gameData
      }
    default:
      return state
  }
}
