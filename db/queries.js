const pool = require("./pool");

const getUserFromUsername = async (username) => {
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE users.username = $1`,
    [username],
  );
  const user = rows[0];
  return user;
};

const getAllPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

module.exports = {
  getUserFromUsername,
  getAllPosts,
};
