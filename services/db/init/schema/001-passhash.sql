create table if not exists passhash
(
    user_handle uuid references users(user_handle),
    passhash text not null,
    mod_date timestamptz not null default now(),
    primary key(user_handle)
);
grant select, insert, update, delete on table passhash to project_app;
grant select on table passhash to project_read;
