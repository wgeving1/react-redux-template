import {
  executeUpdateUserEmail,
  executeUpdateUsername,
  executeFetchOnlineUsers,
  executeFetchOnlineFriendsForUser
} from '../../commands/users'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class UsersController {
  constructor(router) {
    router.put('/:handle/email', wrapAsyncFunc(this.updateUserEmail)),
    router.put('/:handle/username', wrapAsyncFunc(this.updateUsername)),
    router.get('/online/:handleLoggedInUser', wrapAsyncFunc(this.fetchOnlineUsers)),
    router.get('/online/:handle/friends', wrapAsyncFunc(this.fetchOnlineFriendsForUser))
  }

  async updateUserEmail(req, res) {
    const { handle } = req.params
    const { email } = req.body
    const results = await executeUpdateUserEmail(handle, email)
    res.send(results)
  }

  async updateUsername(req, res) {
    const { handle } = req.params
    const { username } = req.body
    const results = await executeUpdateUsername(handle, username)
    res.send(results)
  }

  async fetchOnlineUsers(req, res) {
    const { handleLoggedInUser } = req.params
    const results = await executeFetchOnlineUsers(handleLoggedInUser)
    res.send(results)
  }
  async fetchOnlineFriendsForUser(req, res) {
    const { handle } = req.params
    const results = await executeFetchOnlineFriendsForUser(handle)
    res.send(results)
  }
}
