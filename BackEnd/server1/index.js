const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/test/posts", (req, res) => {
  try {
    const { name, email } = req.body;
    if (name === "Rutwik" && email === "rd1@gmaill.com")
      res.status(200).json({
        success: "ggs",
        message: "gotcha",
        token: "tempToken",
        user: "Kaisa hai RD",
      });
    else res.status(404).json({ message: "user not found" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log("listening on port " + port);
});
