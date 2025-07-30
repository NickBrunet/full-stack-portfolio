CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);

-- Serial is a 32 bit (4 byte) auto-incrementing value

INSERT INTO users
VALUES (DEFAULT, 'nick', 'nick@gmail.com');