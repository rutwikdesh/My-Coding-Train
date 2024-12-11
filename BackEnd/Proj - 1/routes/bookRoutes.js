import { Router } from "express";
import { addBook, getAllBooks } from "../controllers/bookController.js";
const router = Router();

const logger = (req, res, next) => {
  console.log("logged!");
  next();
};

const auth = (req, res, next) => {
  console.log("Authenticated!");
  next();
};

router.get("/", logger, auth, getAllBooks);
router.post("/addBook", logger, auth, addBook);

export default router;
