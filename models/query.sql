-- CREATE TABLE author (
--     id SERIAL PRIMARY KEY,
--     fname varchar(20),
--     lname varchar(20),
--     bio varchar(100),
--     imagePath varchar(500)
-- );

-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     name varchar(30)
-- );

-- CREATE TABLE blog (
--     id SERIAL PRIMARY KEY,
--     title varchar(50),
--     author_id integer REFERENCES author(id),
--     category_id integer REFERENCES categories(id),
--     body varchar,
--     create_date date,
--     published_date date,
--     visible boolean
-- );

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     username varchar(15),
--     post_date date,
--     blog_id integer REFERENCES blog(id),
--     body varchar(150),
--     visible boolean
-- );


INSERT INTO author VALUES 
( DEFAULT, 'Anuj', 'Saheba', 'Digital Crafts Coder from Houston', 'https://t00.deviantart.net/JTjVSRNtd8jkwF_vfLEeZ_0_fd4=/500x250/filters:fixed_height(100,100):origin()/pre00/6d88/th/pre/i/2015/104/8/8/baymex_by_shadowstormr-d8jhoyi.jpg'),
( DEFAULT, 'Jean', 'George', 'Superior Digital Crafts Coder from Houston that got paired with Anuj', 'https://www.telegraph.co.uk/content/dam/TV/2015-09/30sep/spongebob-squarepants.jpg?imwidth=450'),
( DEFAULT, 'Erick', 'Thai', 'Ultimate Digital Crafts Coder that wanted to be a physical therapist', 'https://media.self.com/photos/57d89501d3276fe2329467ba/4:3/w_728,c_limit/GettyImages-514674618.jpg'),
( DEFAULT, 'Phong', 'Mach', 'The Silent Gamer', 'https://www.pcgamesn.com/wp-content/uploads/2018/08/runescape-header-1-900x507.png');

INSERT INTO categories VALUES
(DEFAULT, 'Coding'),
(DEFAULT, 'Gaming'),
(DEFAULT, 'Self-Help'),
(DEFAULT, 'Fiction'), 
(DEFAULT, 'Motivational'),
(DEFAULT, 'Comedy'),
(DEFAULT, 'Horror'),
(DEFAULT, 'Sports'),
(DEFAULT, 'Movies'),
(DEFAULT, 'Music'),
(DEFAULT, 'Politics'),
(DEFAULT, 'Health & Beauty'),
(DEFAULT, 'Cooking'),
(DEFAULT, 'Fashion');

