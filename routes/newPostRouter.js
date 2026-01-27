const controller = require("./../controllers/controller");
const { Router } = require("express");

const newPostRouter = Router();

newPostRouter.get("/", controller.newPostGet);
newPostRouter.post("/", controller.newPostAdd);

module.exports = newPostRouter;
