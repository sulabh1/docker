const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("bye there");
});

app.listen(8000, () => {
  console.log(`listening to the port 8000`);
});
