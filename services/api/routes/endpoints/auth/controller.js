import { authinticateLogin } from '../../commands/auth'

export default class AuthController {
  constructor(router) {
    router.post('/login', this.login)
  }

  async login(req, res) {
    const { email, password } = req.body
    const results = await authinticateLogin(email, password)
    res.send(results)
  }
}
