insert into passhash (user_handle, passhash) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'Development'),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', 'Development')
on conflict do nothing;
