insert into users (user_handle, username, first_name, middle_name, last_name, suffix, email, joined_date) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'SiteAdmin', 'Jason', 'T', 'Jacobson', '', 'admin@gmail.com', now()),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', 'User', 'Frank', 'D', 'Kaiden', '', 'user@gmail.com', now())
on conflict do nothing;
