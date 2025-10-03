const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node App 2");
});

app.listen(PORT, () => {
  console.log(`Node App 2 running on port ${PORT}`);
});
