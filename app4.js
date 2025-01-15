// Created By Yarden Halely & Nave Shitrit 
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

function myWebsite(req, res, next) {
  console.log("Hello 1");
  next();
}
function myWebsite2(req, res, next) {
  console.log("Hello 2");
  next();
}
app.use([myWebsite, myWebsite2]);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/willThisWork", (req, res) => {
  res.send();
});
app.get("/Users", (req, res) => {
  const myHtml = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Users</title>
      </head>
      <body>
        <h1>Users Html </h1>
        <p>Created By Yarden Halely & Nave Shitrit</p>
      </body>
    </html>
    `;
  res.send(myHtml);
});
app.listen(port, () => {
  console.log(`Users API listening on port ${port}`);
});
