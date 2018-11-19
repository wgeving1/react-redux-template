import {
  fetchOnlineFriendsForUser,
  fetchOnlineUsers,
  updateUserEmail,
  updateUsername
} from '../repositories/user'

export async function executeUpdateUserEmail (handle, email) {
  const user = await updateUserEmail(handle, email)

  return { user }
}

export async function executeUpdateUsername (handle, name) {
  const user = await updateUsername(handle, name)

  return { user }
}

export async function executeFetchOnlineUsers() {
  const onlineUsers = await fetchOnlineUsers()
  return { onlineUsers }
}

export async function executeFetchOnlineFriendsForUser(handle) {
  const onlineFriends = await fetchOnlineFriendsForUser(handle)
  return { onlineFriends }
}
