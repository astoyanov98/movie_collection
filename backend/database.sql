CREATE DATABASE mk_database;

CREATE TABLE favourite_movies(
    favourite_movies_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    image VARCHAR,
    description VARCHAR,
    id INTEGER,
    rating INTEGER,
    comment VARCHAR
)