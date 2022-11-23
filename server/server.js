const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Serve up static assets; only runs in production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.use(require("./routes"));

app.listen(PORT, () =>
  console.log(`-----🌍 Connected on localhost:${PORT}-----`)
);