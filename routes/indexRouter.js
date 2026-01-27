const controller = require("./../controllers/controller");
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", controller.homePageGet);

module.exports = indexRouter;
