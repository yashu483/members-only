const passport = require("passport");
const { Router } = require("express");
const controller = require("./../controllers/controller");

const logInRouter = Router();

logInRouter.get("/", controller.logInGet);

logInRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  }),
);

module.exports = logInRouter;
