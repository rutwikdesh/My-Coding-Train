const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/api/books", bookRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});
