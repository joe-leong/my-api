const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.end('aaa')
});

app.listen("3000");
