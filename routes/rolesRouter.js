const { Router } = require("express");
const controller = require("./../controllers/rolesController");

const rolesRouter = Router();

rolesRouter.get("/", controller.rolesGet);
rolesRouter.post("/:role", controller.roleApplyPost);
