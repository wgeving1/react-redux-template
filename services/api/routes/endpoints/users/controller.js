import {
  executeUpdateUserEmail,
  executeUpdateUsername
} from '../../commands/users'

export default class UsersController {
  constructor(router) {
    router.put('/:handle/email', this.updateUserEmail),
    router.put('/:handle/username', this.updateUsername)
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
}
