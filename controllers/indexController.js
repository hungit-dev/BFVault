const renderHomePage = (req, res) => {
  return res.render("home-page");
};
const renderTermsPage = (req, res) => {
  return res.render("terms-page");
};

module.exports = {
  renderHomePage,
  renderTermsPage,
};
