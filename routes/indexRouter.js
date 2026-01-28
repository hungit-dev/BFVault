const { Router } = require("express");
const indexRouter = Router();
const {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
  renderContactUsPage,
  renderHowToRunPage,
} = require("../controllers/indexController");

indexRouter.get("/", renderHomePage);
indexRouter.get("/terms_of_use", renderTermsPage);
indexRouter.get("/privacy", renderPrivacyPage);
indexRouter.get("/contact_us", renderContactUsPage);
indexRouter.get("/how_to_run", renderHowToRunPage);

module.exports = indexRouter;
