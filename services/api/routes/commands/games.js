import { getDataForGameFromDB } from '../repositories/games'

export async function executeGetGamesDetails(gameId) {
  const game = await getDataForGameFromDB(gameId)
  return { gameData: game }
}
