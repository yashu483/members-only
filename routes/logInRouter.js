const passport = require("passport");
const { Router } = require("express");
const controller = require("./../controllers/controller");

const logInRouter = Router();

logInRouter.get("/", controller.logInGet);

logInRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
  }),
);

module.exports = logInRouter;
