const db = require("./../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const rolesGet = (req, res) => {
  res.render("roles");
};
const roleApplyPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).render("roles");
  }
};

module.exports = {
  rolesGet,
  roleApplyPost,
};
