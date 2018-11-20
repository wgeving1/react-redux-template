create table if not exists games
(
    game_id uuid default gen_random_uuid(),
    player_one uuid references users(user_handle),
    player_two uuid references users(user_handle),
    primary key(game_id, player_one, player_two)
);
grant select, insert, update, delete on table games to project_app;
grant select on table games to project_read;
