const { Router } = require("express");
const controller = require("./../controllers/controller");

const signUpRouter = Router();

signUpRouter.get("/", (req, res, next) => {
  res.render("sign-up");
});

signUpRouter.post("/", controller.signUpPost);

module.exports = signUpRouter;
