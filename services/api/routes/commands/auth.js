import { login } from '../repositories/auth'
import { fetchUserByEmail } from '../repositories/user'

export async function authinticateLogin(email, password) {
  if (!email || !password) {
    throw new Error({ status: 400, msg: 'Must provide username or password' })
  }
  const user = await fetchUserByEmail(email)
  const userCreds = await login(user.userHandle)
  //Note this is a very dumbed down site...and should not be used in production
  //This is just for learning.
  const credsMatch = userCreds === password

  if(credsMatch) {
    return {
      match: true
    }
  } else {
    throw new Error('Email or Password not found')
  }
}
