import {
  executeUpdateUserEmail,
  executeUpdateUsername,
  executeFetchOnlineUsers,
  executeFetchOnlineFriendsForUser
} from '../../commands/users'

export default class UsersController {
  constructor(router) {
    router.put('/:handle/email', this.updateUserEmail),
    router.put('/:handle/username', this.updateUsername),
    router.get('/online', this.fetchOnlineUsers),
    router.get('/online/:handle/friends', this.fetchOnlineFriendsForUser)
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
    const results = await executeFetchOnlineUsers()
    res.send(results)
  }
  async fetchOnlineFriendsForUser(req, res) {
    const { handle } = req.params
    const results = await executeFetchOnlineFriendsForUser(handle)
    res.send(results)
  }
}
