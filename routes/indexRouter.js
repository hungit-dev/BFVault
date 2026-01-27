const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("BFVault");
});

module.exports = indexRouter;
