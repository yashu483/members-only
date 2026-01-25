const pool = require("./pool");

// queries for users table
const getUserFromUsername = async (username) => {
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE users.username = $1`,
    [username],
  );
  const user = rows[0];
  return user;
};

const getUserFromId = async (id) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
};

// queries for posts table
const getAllPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

module.exports = {
  getUserFromUsername,
  getUserFromId,
  getAllPosts,
};
