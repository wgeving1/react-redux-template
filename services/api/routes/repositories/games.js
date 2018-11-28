import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'

const userMapper = (row) => ({
  userHandle: row.user_handle,
  username: row.username,
  firstName: row.first_name,
  email: row.email
})

export async function getDataForGameFromDB(gameId) {
  const query = sql`select u.user_handle, u.username, u.first_name, u.email
                    from users u
                      inner join games g on
                        g.game_id = ${gameId}
                      where u.user_handle = g.player_one
                      or u.user_handle = g.player_two;`

  const players = await PGWrapper.sqlAndMap(query, userMapper)

  return players
}
