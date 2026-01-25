const { Router } = require("express");

const signUpRouter = Router();

signUpRouter.get("/", (req, res, next) => {
  res.render("sign-up");
});

signUpRouter.post("/", (req, res, next) => {
  res.send("done");
});
