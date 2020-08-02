const router = require("express").Router();
const fs = require("fs");
const path = require("path");

// GET "/api/notes" responds with all notes from the database
router.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
    err,
    data
  ) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.post("/api/notes", (req, res) => {
  fs.sendFile(path.join(__dirname, "../db/db.json"), "utf8", function (
    err,
    data
  ) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/api/notes/:id", (req, res) => {});

module.exports = router;
