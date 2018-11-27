insert into passhash (user_handle, passhash) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'dev'),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', 'dev'),
    ('6c0f80fa-661c-4f07-ad0e-946e91491b7b', 'npc')
on conflict do nothing;
