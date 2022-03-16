const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App Server 2");
});

app.listen(8081, () => {
  console.log("App running on port 8081");
});
