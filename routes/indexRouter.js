const { Router } = require("express");
const indexRouter = Router();
const {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
} = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);
indexRouter.get("/terms_of_use", renderTermsPage);
indexRouter.get("/privacy", renderPrivacyPage);

module.exports = indexRouter;
