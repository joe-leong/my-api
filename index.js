const express = require("express");

const app = new express();

app.get("/test", (req, res) => {
  res.send("aaa");
});
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
