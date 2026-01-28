const { Router } = require("express");
const indexRouter = Router();
const {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
  renderContactUsPage,
} = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);
indexRouter.get("/terms_of_use", renderTermsPage);
indexRouter.get("/privacy", renderPrivacyPage);
indexRouter.get("/contact_us", renderContactUsPage);

module.exports = indexRouter;
