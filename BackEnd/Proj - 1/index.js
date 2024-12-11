import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bookRoutes from "./routes/bookRoutes.js";
import { connectToDb } from "./config/db.js";

const app = express();

// Middlewares
app.use(json());
app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());

// Routes
app.use("/books", bookRoutes);

const startServer = async () => {
  try {
    // DB Config
    await connectToDb();

    // Listner
    app.listen(3000, () => {
      console.log("Listenting on PORT 3000 🚀");
    });
  } catch (err) {
    console.error(err.message);
  }
};

startServer();
