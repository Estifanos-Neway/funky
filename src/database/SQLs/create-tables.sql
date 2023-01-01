CREATE DATABASE funky;

-- Admins
CREATE TABLE admins (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR NOT NULL
);

-- Artists
CREATE TABLE artists(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    stage_name VARCHAR(100) NOT NULL,
    titles VARCHAR(100)[],
    bio VARCHAR
);

CREATE TABLE artist_avatars(
    id SERIAL PRIMARY KEY NOT NULL,
    artist_id INTEGER REFERENCES artists ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Pages
CREATE TABLE pages (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR,
    artist_id INTEGER REFERENCES artists ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TABLE page_avatars(
    id SERIAL PRIMARY KEY NOT NULL,
    page_id INTEGER REFERENCES pages ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Creators
CREATE TABLE creators(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR NOT NULL,
    member_since TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TABLE creator_avatars(
    id SERIAL PRIMARY KEY NOT NULL,
    creator_id INTEGER REFERENCES creators ON DELETE CASCADE,
    path VARCHAR(200) NOT NULL
);

-- Pages and Creators (many-to-many)
CREATE TABLE pages_creators (
    page_id INTEGER REFERENCES pages ON DELETE CASCADE,
    creator_id INTEGER REFERENCES creators ON DELETE CASCADE,
    PRIMARY KEY (page_id, creator_id)
);