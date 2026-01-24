const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = indexRouter;
