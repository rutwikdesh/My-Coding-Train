const pool = require("../config/db");

const createPatient = async (req, res) => {
  try {
    const { name, age, gender, disease } = req.body;
    const result = await pool.query(
      "INSERT INTO patients (name, age, gender, disease) VALUES ($1, $2, $3, $4)",
      [name, age, gender, disease]
    );
    res.status(201).json(result.oid);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPatient };
