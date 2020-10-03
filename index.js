const express = require("express");

const PORT = 80;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  let table =
    '<table border="1"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>';
  for (const [key, value] of Object.entries(process.env)) {
    table += `<tr><td>${key}</td><td>${value}</td></tr>`;
  }
  table += "</table></tbody>";

  res.send(`<h1>Web App env!</h1>${table}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
