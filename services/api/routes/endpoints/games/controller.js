import {
  executeGetGamesDetails,
} from '../../commands/games'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class GamesController {
  constructor(router) {
    router.get('/:gameId', wrapAsyncFunc(this.getGameDetails))
  }

  async getGameDetails(req, res) {
    const { gameId } = req.params
    const results = await executeGetGamesDetails(gameId)
    res.send(results)
  }
}
