const express = require("express");
const notes = require("./data/nodes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on finally port ${port}`));
