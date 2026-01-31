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

const checkUsernameAvailability = async (username) => {
  const { rowCount } = await pool.query(
    "SELECT 1 FROM users WHERE username = $1",
    [username],
  );

  return rowCount === 0;
};

const addUser = async (user) => {
  await pool.query(
    "INSERT INTO users (username, password, first_name, last_name) VALUES ($1, $2, $3, $4)",
    [user.username, user.password, user.firstName, user.lastName],
  );
};

const grantMembership = async (id) => {
  await pool.query("UPDATE users SET is_member = true WHERE id = $1", [id]);
};

const grantAdminRole = async (id) => {
  await pool.query("UPDATE users SET is_admin = true WHERE id = $1", [id]);
};

// queries for posts table
const getAllPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const createPost = async (post) => {
  await pool.query(
    "INSERT INTO posts (title, message, user_id) VALUES ($1, $2, $3)",
    [post.title, post.message, post.userId],
  );
};

// auth answer table queries

const getMembershipKey = async () => {
  const { rows } = await pool.query(
    "SELECT value FROM authorization_answers WHERE role_name = $1",
    ["member"],
  );

  return rows[0]?.value || null;
};

const getAdminRoleKey = async () => {
  const { rows } = await pool.query(
    "SELECT value FROM authorization_answers WHERE role_name = $1",
    ["admin"],
  );
  return rows[0]?.value || null;
};
module.exports = {
  getUserFromUsername,
  getUserFromId,
  addUser,
  checkUsernameAvailability,
  grantAdminRole,
  grantMembership,
  getAllPosts,
  createPost,
  getMembershipKey,
  getAdminRoleKey,
};
