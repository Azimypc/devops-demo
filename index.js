const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(" DevOps Pamirsoftware IT Solutions Mohammad. 2026🚀");
  
  
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
