const renderHomePage = (req, res) => {
  return res.render("home-page");
};
const renderTermsPage = (req, res) => {
  return res.render("terms-page");
};
const renderPrivacyPage = (req, res) => {
  return res.render("privacy-page");
};
module.exports = {
  renderHomePage,
  renderTermsPage,
  renderPrivacyPage,
};
