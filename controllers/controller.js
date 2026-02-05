const db = require("./../db/queries");
const bcrypt = require("bcryptjs");
const { body, validationResult, matchedData } = require("express-validator");
const errMessages = {
  notEmpty(field) {
    return `${field} cannot be empty`;
  },
  userNameErr:
    "Username can contain  letters, numbers, underscore and dot only",
  isLength(min, max, field = "") {
    return `${field} should be between ${min} and ${max} characters`;
  },
  passwordErr:
    "Password should contain at least 1 uppercase, 1 lowercase, 1 number, 1 symbol",
  confirmPassErr: "Password confirmation does not match password",
};
const validateSignUpData = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username` + errMessages.notEmpty)
    .matches(/^[A-Za-z0-9._-]+$/)
    .withMessage(errMessages.userNameErr)
    .isLength({ min: 2, max: 50 })
    .withMessage(errMessages.isLength(2, 50, "username"))
    .custom(async (value) => {
      const availability = await db.checkUsernameAvailability(value);
      if (!availability) {
        throw new Error("username already  exists");
      }
      return true;
    }),
  body("password")
    .trim()
    .notEmpty()
    .withMessage(errMessages.notEmpty("Password"))
    .isStrongPassword({
      minLength: 5,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    })
    .withMessage(errMessages.passwordErr),
  body("confirmPass")
    .trim()
    .notEmpty()
    .withMessage(errMessages.confirmPassErr)
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      }
      return true;
    }),
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage(errMessages.notEmpty("First Name"))
    .isLength({ max: 100 })
    .withMessage("First Name should not be more than 100 character"),
  body("lastName")
    .trim()
    .isLength({ max: 100 })
    .withMessage("Last name should not be more than 100 character long"),
];

// homepage controller
const homePageGet = async (req, res) => {
  const posts = await db.getPostData();
  const removeTimeFromPost = posts.map((post) => ({
    ...post,
    created_at: post.created_at
      ? post.created_at.toISOString().split("T")[0]
      : null,
  }));

  res.render("index", { posts: removeTimeFromPost });
};

// signup page controller
const signUpGet = (req, res) => {
  res.render("sign-up");
};

const signUpPost = [
  validateSignUpData,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).render("sign-up", { errors: errors.array() });
        return;
      }

      const user = matchedData(req);
      const hashedPass = await bcrypt.hash(user.password, 10);

      const userData = {
        username: user.username,
        password: hashedPass,
        firstName: user.firstName,
        lastName: user.lastName,
      };

      await db.addUser(userData);
      res.redirect("/login");
    } catch (err) {
      next(err);
    }
  },
];

// login page controller
const logInGet = (req, res) => {
  const errorMessage = req.session.messages;
  res.render("log-in", { error: errorMessage });
};

// new-post page controller

const newPostGet = (req, res) => {
  res.render("new-post");
};

const validateNewPost = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .isLength({ max: 100 }),
  body("message").trim().notEmpty().withMessage("message cannot be empty"),
];
const newPostAdd = [
  validateNewPost,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("new-post", { errors: errors.array() });
      return;
    }
    const user = req.user;
    const post = matchedData(req);
    const postData = {
      title: post.title,
      message: post.message,
      userId: user.id,
    };
    await db.createPost(postData);
    res.redirect("/");
  },
];
module.exports = {
  homePageGet,
  signUpGet,
  signUpPost,
  logInGet,
  newPostGet,
  newPostAdd,
};
