// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import path from "path";
// import { fileURLtoPath } from "url";
// const __filename = fileURLtoPath(import.meta.url);
// const __dirname = path.dirname(__filename)

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// connect to the database
connectDB();

// helps in securing http headers
app.use(helmet());

// middleware used for http request logging
app.use(morgan("tiny"));

// Routes
// app.use("/api/posts", postRoutes);

app.get("/posts", (req, res) => {
  res.send({
    data: {
      posts: [
        {
          title: "My First Post",
          description: "This is my first post",
        },
        {
          title: "My Second Post",
          description: "This is my second post",
        },
        {
          title: "My Third Post",
          description: "This is my third post",
        },
      ],
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🚀`);
});
