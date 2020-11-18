const express = require("express");

const app = new express();

app.get("/test", (req, res) => {
  res.end('aaa')
});

app.listen("3000");
