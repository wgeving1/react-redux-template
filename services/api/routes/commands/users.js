import { updateUserEmail } from '../repositories/user'

export async function executeUpdateUserEmail (handle, email) {
  const user = await updateUserEmail(handle, email)

  return { user }
}
