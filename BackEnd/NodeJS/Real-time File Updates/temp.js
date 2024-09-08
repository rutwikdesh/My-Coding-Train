const express = require("express");
const http = require("http");
const fs = require("fs");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const filePath = "./file-to-watch.txt";

fs.watch(filePath, (fileType, fileName) => {
  if (fileName) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(error);
        return;
      }
      io.emit("file-update", data);
    });
  }
});

console.log(path.join(__dirname, "rd", "gg"));
