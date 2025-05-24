const express = require("express");
const { default: ApiController } = require("./controllers/APIController");

const app = express();

app.get("/api/publish", ApiController);
