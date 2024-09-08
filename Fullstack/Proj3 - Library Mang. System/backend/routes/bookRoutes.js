const express = require("express");
const {
  returnBook,
  searchBook,
  borrowBook,
  addBook,
} = require("../controllers/bookController");
const router = express.Router();

const logger = (req, res, next) => {
  console.log("Logging middleware running...");
  next();
};

const auth = (req, res, next) => {
  console.log("Authenticated!");
  next();
};

router.get("/search", logger, auth, searchBook);
router.put("/borrowBook/:isbn", borrowBook);
router.post("/addBook", addBook);
router.put("/returnBook/:isbn", returnBook);

module.exports = router;
