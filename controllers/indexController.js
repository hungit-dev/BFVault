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
  return res.render("scripts-page");
};
module.exports = {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
  renderContactUsPage,
  renderHowToRunPage,
  renderScriptsPage,
};
