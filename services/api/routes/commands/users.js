import { updateUser } from '../repositories/user'

export async function executeUpdateUserEmail (handle, email) {
  const updatedUser = await updateUser(handle, 'email', email)

  return updatedUser
}
