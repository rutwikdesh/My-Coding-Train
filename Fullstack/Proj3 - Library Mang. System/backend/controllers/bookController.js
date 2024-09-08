const Book = require("../models/Book");

const searchBook = async (req, res) => {
  try {
    const { title, author, isbn } = req.query;

    let query = {};

    if (title) query.title = { $regex: title, $options: "i" };
    if (author) query.author = { $regex: author, $options: "i" };
    if (isbn) query.isbn = isbn;

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ error: "Error searching books" });
  }
};

const borrowBook = async (req, res) => {
  try {
    const { user } = req.body;
    const book = await Book.findOne({ isbn: req.params.isbn });

    if (!book) res.status(404).json({ error: "Book not found" });
    if (book.isBorrowed)
      return res.status(400).json({ error: "Book is already borrowed" });

    book.isBorrowed = true;
    book.borrowedBy = user;

    await book.save();

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error borrowing book" });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = new Book({ title, author });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error creating book" });
  }
};

const returnBook = async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const book = await Book.findOne({ isbn });
    if (!book) {
      return res.status(404).json({ error: "Unable to find book" });
    }

    if (!book.isBorrowed) {
      return res.status(400).json({ error: "Book is not borrowed" });
    }

    book.isBorrowed = false;
    book.borrowedBy = null;

    await book.save();

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error returning book" });
  }
};

module.exports = { searchBook, borrowBook, addBook, returnBook };
