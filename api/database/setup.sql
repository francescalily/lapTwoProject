DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS community;


CREATE TABLE book (
    book_id INT GENERATED ALWAYS AS IDENTITY,
    book_name VARCHAR(70) UNIQUE NOT NULL,
    book_description VARCHAR(500),
    upvotes INT DEFAULT 0,
    PRIMARY KEY (book_id)
);

INSERT INTO book
    (book_name, book_description, upvotes)
VALUES
    ('History of Florin', 'An overview of why Florin has the potential to become the most diverse place in the world.', 0),
    ('Recadia Wars', 'Enriched stories of the ancestral defeat in the many battles for Recadia. ',  0),
    ('All Things Lit', 'Hot topic discussions within Literature that have developed from the Beautiful City of Florin.',  0),
    ('Shine n Dine', 'From its mediteranean dish pattern, to its South Asian dessert style - Florin has a rich history of foods... and its not by chance.' , 0);
 

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    isadmin BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id)
);

CREATE TABLE community (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30),
    topic VARCHAR(50) NOT NULL,
    post VARCHAR(300) NOT NULL,
    votes INT DEFAULT 0,
    PRIMARY KEY (user_id)
);

INSERT INTO community
    (username, topic, post, votes)
VALUES
('Franki', 'History', 'I love how the git commited team are working on the history of Florin!', 0),
('Hasan', 'Ideas', 'I think this website is the best website I have ever been on:---)', 0);
