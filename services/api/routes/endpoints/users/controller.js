import { executeUpdateUserEmail } from '../../commands/users'

export default class UsersController {
  constructor(router) {
    router.post('/:handle', this.updateUser)
  }

  async updateUser(req, res) {
    const { handle } = req.params
    const { email } = req.body
    const results = await executeUpdateUserEmail(handle, email)
    res.send(results)
  }
}
