insert into users (user_handle, username, first_name, middle_name, last_name, suffix, email, joined_date) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'SiteAdmin', 'Jason', 'T', 'Jacobson', '', 'admin@gmail.com', now()),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', 'User', 'Frank', 'D', 'Kaiden', '', 'user@gmail.com', now()),
    ('6c0f80fa-661c-4f07-ad0e-946e91491b7b', 'NPC_1', 'Kim', 'F', 'Hunter', '', 'npc_1@gmail.com', now()),
    ('70440098-c0a6-4da2-948f-35ac1a6ca752', 'NPC_2', 'John', 'Paul', 'Johnson', '', 'npc_2@gmail.com', now()),
    ('c0a207b1-9f2f-4978-9fc3-f817331044db', 'NPC_3', 'Dustin', 'Allan', 'Hayden', '', 'npc_3@gmail.com', now()),
    ('9e252bce-fc53-4634-b21d-339a0547c520', 'NPC_4', 'Samantha', 'W', 'Kirkland', '', 'npc_4@gmail.com', now())
on conflict do nothing;
