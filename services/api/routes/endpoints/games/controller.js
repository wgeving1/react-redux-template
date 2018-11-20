import {
  executeGetGamesDetails,
} from '../../commands/games'

export default class GamesController {
  constructor(router) {
    router.get('/:gameId', this.getGameDetails)
  }

  async getGameDetails(req, res) {
    const { gameId } = req.params
    const results = await executeGetGamesDetails(gameId)
    res.send(results)
  }
}
