import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'

const userMapper = (row) => ({
  userHandle: row.user_handle,
  username: row.username,
  firstName: row.first_name,
  middleName: row.middle_name,
  lastName: row.last_name,
  suffix: row.suffix,
  email: row.email,
  joinedDate: row.joined_date
})

export async function fetchUserByEmail(email) {
  const query = sql`select * from users where email = ${email};`
  const results = await PGWrapper.sqlAndMap(query, userMapper)
  return results[0]
}

export async function updateUserEmail(handle, val) {
  const statement = sql`update users set email = ${val} where user_handle = ${handle} returning *;`
  const results = await PGWrapper.sqlAndMap(statement, userMapper)
  return results[0]
}

export async function updateUsername(handle, val) {
  const statement = sql`update users set username = ${val} where user_handle = ${handle} returning *;`
  const results = await PGWrapper.sqlAndMap(statement, userMapper)
  return results[0]
}
