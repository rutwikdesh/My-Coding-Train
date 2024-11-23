const express = require("express");
const { connectToDb, getDb } = require("./db.js");

const app = express();
app.use(express.json());

// DB Connection
let db;
connectToDb((err) => {
  if (!err) {
    console.log("DB Connection successful 🔥");
    app.listen("3000", () => {
      console.log("Listening on PORT 3000 🚀");
    });
    db = getDb();
  }
});

// Routes
app.get("/books", (req, res) => {
  const data = [];
  db.collection("posts")
    .find()
    .forEach((book) => {
      data.push(book);
    })
    .then(() => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
