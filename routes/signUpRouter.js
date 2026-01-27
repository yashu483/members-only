const { Router } = require("express");
const controller = require("./../controllers/controller");

const signUpRouter = Router();

signUpRouter.get("/", controller.signUpGet);

signUpRouter.post("/", controller.signUpPost);

module.exports = signUpRouter;
