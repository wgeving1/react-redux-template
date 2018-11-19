create table if not exists online_status
(
    user_handle uuid references users(user_handle),
    status boolean not null,
    mod_date timestamptz not null default now(),
    primary key(user_handle)
);
grant select, insert, update, delete on table online_status to project_app;
grant select on table online_status to project_read;
