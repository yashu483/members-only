const { Router } = require("express");
const controller = require("./../controllers/rolesController");

const rolesRouter = Router();

rolesRouter.get("/", controller.rolesGet);

// could have used req.params for getting route name but using separate controllers for simplicity
rolesRouter.post("/:role", controller.rolesApplyPost);

module.exports = rolesRouter;
