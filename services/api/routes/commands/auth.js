import { login } from '../repositories/auth'
import { fetchUserByEmail } from '../repositories/user'
import { StatusError } from '../../common/errors'

export async function authinticateLogin(email, password) {
  if (!email || !password) {
    throw new StatusError({ status: 400, msg: 'Must provide username or password' })
  }
  const user = await fetchUserByEmail(email)
  const userCreds = await login(user.userHandle)
  //Note this is a very dumbed down site...and should not be used in production
  //This is just for learning.
  const credsMatch = userCreds.passhash === password

  if(credsMatch) {
    return {
      user
    }
  } else {
    throw new StatusError({ status: 400, msg: 'Email or Password not found'})
  }
}
