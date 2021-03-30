const express = require("express");
const path = require("path");
const unirest = require("unirest");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "/public")));
app.use(express.json());

const req = unirest("GET", "https://api-baseball.p.rapidapi.com/standings");

app.get("/standings", (req, res) => {
  res;
});

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
