const { prisma } = require("../lib/prisma.js");

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
const renderScriptsPage = async (req, res) => {
  const scripts = await prisma.script.findMany();
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
