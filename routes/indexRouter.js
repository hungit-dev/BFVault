const { Router } = require("express");
const indexRouter = Router();
const {
  renderHomePage,
  renderTermsPage,
} = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);
indexRouter.get("/terms_of_use", renderTermsPage);

module.exports = indexRouter;
