import { login } from '../repositories/auth'
import { fetchUserByEmail } from '../repositories/user'

export async function authinticateLogin(email, password) {
  if (!email || !password) {
    throw new Error({ status: 400, msg: 'Must provide username or password' })
  }
  const user = await fetchUserByEmail(email)
  console.log('user', user)
  const userCreds = await login(user.userHandle)
  console.log('User Creds', userCreds)
  //Note this is a very dumbed down site...and should not be used in production
  //This is just for learning.
  const credsMatch = userCreds.passhash === password

  if(credsMatch) {
    return {
      match: true
    }
  } else {
    throw new Error('Email or Password not found')
  }
}
