require("dotenv").config();
const { Client } = require("pg");

// sql for creating users and posts table if not exists
const SQL = `
CREATE  TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name  TEXT NOT NULL,
last_name TEXT,
username VARCHAR(100) NOT NULL UNIQUE,
password TEXT NOT NULL,
membership_status VARCHAR(100),

CHECK(username ~ '^[A-Za-z0-9._-]+$'),
CHECK(length(first_name) <= 100)
);

CREATE TABLE IF NOT EXISTS posts(
id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title TEXT NOT NULL,
message TEXT NOT NULL,
user_id INTEGER,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users(id),
CHECK(length(title) <= 400)
);`;

const main = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    console.log("seeding...");

    await client.connect();
    await client.query("BEGIN");
    await client.query(SQL);
    await client.query("COMMIT");
    await client.end();
  } catch (err) {
    await client.query("ROLLBACK");
    throw new Error(err);
  } finally {
    console.log("completed");
  }
};

// run node populate.js in terminal to execute the file
main();
