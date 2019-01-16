CREATE TABLE author (
    id SERIAL PRIMARY KEY,
    fname varchar(20),
    lname varchar(20),
    bio varchar(100),
    imagePath varchar(500)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name varchar(30)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username varchar(15),
    post_date date,
    blog_id integer REFERENCES blog(id),
    body varchar(150),
    visible boolean
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title varchar(50),
    author varchar(50) REFERENCES author(id),
    category varchar(30) REFERENCES categories(id),
    body varchar,
    create_date date,
    published_date date,
    visible boolean
);