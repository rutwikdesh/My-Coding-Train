const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

const hospitalRoutes = require("./routes/hospitalRoutes");
app.use("/hospital", hospitalRoutes);

const server = app.listen("3000", () => {
  console.log("Listening on PORT 3000 🚀");
});

server.on("error", (err) => {
  console.error("Failed to start server 😵‍💫", err);
});
