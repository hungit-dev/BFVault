const { Router } = require("express");
const indexRouter = Router();
const { renderHomePage } = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);

module.exports = indexRouter;
