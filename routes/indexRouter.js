const { Router } = require("express");
const indexRouter = Router();
const {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
  renderContactUsPage,
  renderHowToRunPage,
  renderScriptsPage,
} = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);
indexRouter.get("/terms_of_use", renderTermsPage);
indexRouter.get("/privacy_policy", renderPrivacyPage);
indexRouter.get("/contact_us", renderContactUsPage);
indexRouter.get("/how_to_run", renderHowToRunPage);
indexRouter.get("/scripts", renderScriptsPage);

module.exports = indexRouter;
