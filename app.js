const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
// Use Ejs template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Use static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//Use indexRouter
app.use("/", indexRouter);
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`BFVault - listening on port ${PORT}!`);
});
