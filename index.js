const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(" DevOps Pamirsoftware IT Solutions V012 🚀");
  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
