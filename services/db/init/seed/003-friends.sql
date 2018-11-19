insert into friends (user_handle, friend_handle) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', '307ea0f8-8818-49fc-bede-4a4e984f3f41'),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', '06fad102-1a73-41ad-ba62-7bbd4be3278f')
on conflict do nothing;
