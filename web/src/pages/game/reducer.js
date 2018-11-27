export const initialState = {
  players: [],
  unauth: false
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_GAME_DATA_SUCCESS':
      console.log('here ---->', action.gameData)
      if(
        action.handle !== action.gameData[0].userhandle &&
        action.handle !== action.gameData[1].userhandle) {
          console.log('we made it!!!!!!!')
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
