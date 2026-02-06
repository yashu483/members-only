const controller = require("./../controllers/controller");
const { Router } = require("express");

const deleteRouter = Router();

deleteRouter.get("/:userid/:postid", controller.deleteGet);

module.exports = deleteRouter;
