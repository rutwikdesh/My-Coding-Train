const express = require("express");
const { createPatient } = require("../controllers/hospitalController");
const router = express.Router();

router.get("/patients", async (req, res) => {});

// Create/Add a Patient
router.post("/patients", createPatient);

router.get("/patients/:id", async (req, res) => {});

module.exports = router;
