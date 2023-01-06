const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is ON.");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

//req.params.id to fetch particular data from the data set.
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port:${PORT}.`));
