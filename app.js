const express = require("express");
const path = require("path");

const app = express();
app.listen(3034, () => {
  console.log("Server running in port 3034");
});

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
