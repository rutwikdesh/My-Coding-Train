const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    default: () => uuid(),
  },
  isBorrowed: { type: Boolean, default: false },
  borrowedBy: { type: String, default: null },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
