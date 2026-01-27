const { homePageGet } = require("./../controllers/controller");
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", homePageGet);

module.exports = indexRouter;
