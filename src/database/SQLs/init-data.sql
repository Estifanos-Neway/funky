-- admins
INSERT INTO admins (email, password_hash) VALUES ('admin@funky.com','pwh');

-- Artists
INSERT INTO artists (full_name, stage_name, titles, bio) VALUES
('Artist One', 'A-ONE', '{"R&B Singer", "Song Writer"}', 'Here goes short bio of the artist!'),
('Artist Two', 'A-Two', '{"Pop Star"}', 'Here goes short bio of the artist!'),
('Artist Three', 'A-THREE', '{}', NULL),
('Artist Four', 'A-FOUR', NULL,NULL);