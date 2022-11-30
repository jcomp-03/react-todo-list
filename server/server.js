const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// in relation to this file, jump out of parent folder and into client/public
app.use(express.static("../client/public"));

// Serve up static assets if in production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.use(require("./routes"));

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`-----🌍 Connected on localhost:${PORT} -----`)
  );
});
