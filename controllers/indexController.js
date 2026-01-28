const scripts = require("../db/db.js");

const renderHomePage = (req, res) => {
  return res.render("home-page");
};
const renderTermsPage = (req, res) => {
  return res.render("terms-page");
};
const renderPrivacyPage = (req, res) => {
  return res.render("privacy-page");
};
const renderContactUsPage = (req, res) => {
  return res.render("contact-us-page");
};
const renderHowToRunPage = (req, res) => {
  return res.render("how-to-run-page");
};
const renderScriptsPage = (req, res) => {
  console.log(scripts);
  return res.render("scripts-page", { scripts: scripts });
};
module.exports = {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
  renderContactUsPage,
  renderHowToRunPage,
  renderScriptsPage,
};
