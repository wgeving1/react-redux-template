import { authinticateLogin } from '../../commands/auth'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class AuthController {
  constructor(router) {
    router.post('/login', wrapAsyncFunc(this.login))
  }

  async login(req, res) {
    const { email, password } = req.body
    const results = await authinticateLogin(email, password)
    res.send(results)
  }
}
