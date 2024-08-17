const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.end("SERVER RUNNING!");
});

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
