CREATE DATABASE funky;

-- Admins
CREATE TABLE admin (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR NOT NULL
);

-- Artists
CREATE TABLE artist(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    stage_name VARCHAR(100) NOT NULL,
    titles VARCHAR(100)[],
    bio VARCHAR
);

CREATE TABLE artist_avatar(
    id SERIAL PRIMARY KEY NOT NULL,
    artist_id INTEGER REFERENCES artist ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Pages
CREATE TABLE page (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR,
    artist_id INTEGER REFERENCES artist ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TABLE page_avatar(
    id SERIAL PRIMARY KEY NOT NULL,
    page_id INTEGER REFERENCES page ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Creators
CREATE TABLE creator(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR NOT NULL,
    member_since TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TABLE creator_avatar(
    id SERIAL PRIMARY KEY NOT NULL,
    creator_id INTEGER REFERENCES creator ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Pages and Creators (many-to-many)
CREATE TABLE page_creator (
    page_id INTEGER REFERENCES page ON DELETE CASCADE,
    creator_id INTEGER REFERENCES creator ON DELETE CASCADE,
    PRIMARY KEY (page_id, creator_id)
);