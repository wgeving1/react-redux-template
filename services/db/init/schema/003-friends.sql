create table if not exists friends
(
    user_handle uuid references users(user_handle),
    friend_handle uuid references users(user_handle),
    friended_date timestamptz not null default now(),
    primary key(user_handle, friend_handle)
);
grant select, insert, update, delete on table friends to project_app;
grant select on table friends to project_read;
