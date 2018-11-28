import {
  fetchUserStatus,
  fetchOnlineFriendsForUser,
  fetchOnlineUsers,
  updateUserEmail,
  updateUsername
} from '../repositories/user'
import { StatusError } from '../../common/errors'

export async function executeUpdateUserEmail (handle, email) {
  const user = await updateUserEmail(handle, email)

  return { user }
}

export async function executeUpdateUsername (handle, name) {
  const user = await updateUsername(handle, name)

  return { user }
}

export async function executeFetchOnlineUsers(handleForLoggedInUser) {
  const loggedIn = await fetchUserStatus(handleForLoggedInUser)
  if(!loggedIn) {
    throw new StatusError({ status: 400, msg: 'not logged in'})
  }
  const onlineUsers = await fetchOnlineUsers()
  return { onlineUsers }
}

export async function executeFetchOnlineFriendsForUser(handle) {
  const loggedIn = await fetchUserStatus(handle)
  if(!loggedIn) {
    throw new StatusError({ status: 400, msg: 'not logged in'})
  }
  const onlineFriends = await fetchOnlineFriendsForUser(handle)
  return { onlineFriends }
}
