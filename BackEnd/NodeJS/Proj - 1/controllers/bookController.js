import { Book } from "../models/Book.js";

export const addBook = async (req, res) => {
  const { title, author, description } = req.body;
  const checkBookExists = await Book.find({ title });
  console.log(checkBookExists);
  if (checkBookExists.length)
    return res.status(400).json({ error: "Book already exists" });
  const newBook = new Book({ title, author, description });
  await newBook.save();
  return res.status(200).json({ message: "Book added!" });
};

export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  return res.status(200).json(books);
};
