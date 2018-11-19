insert into online_status (user_handle, status) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', false),
    ('307ea0f8-8818-49fc-bede-4a4e984f3f41', false),
    ('6c0f80fa-661c-4f07-ad0e-946e91491b7b', true),
    ('70440098-c0a6-4da2-948f-35ac1a6ca752', true),
    ('c0a207b1-9f2f-4978-9fc3-f817331044db', true),
    ('9e252bce-fc53-4634-b21d-339a0547c520', true)
on conflict do nothing;

