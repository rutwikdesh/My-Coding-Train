const express = require("express");
const app = express();

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const ParkingLot = require("./classes/ParkingLot");
const Vehicle = require("./classes/Vehicle");
require("dotenv").config();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

const parkingLot = new ParkingLot();
parkingLot.addSlot("car");
parkingLot.addSlot("car");
parkingLot.addSlot("bike");
parkingLot.addSlot("bike");
parkingLot.addSlot("bike");
parkingLot.addSlot("truck");

app.post("/api/park", (req, res) => {
  console.log(req.body);
  const { number, type } = req.body;
  const vehicle = new Vehicle(number, type);
  const slot = parkingLot.parkVehicle(vehicle);
  if (slot) {
    res.status(200).json(`Vehicle parked at slot of type ${slot.type}`);
  } else {
    res.status(400).send("No available slots for this vehicle type.");
  }
});

app.post("/api/release", (req, res) => {
  const { number, type } = req.body;
  const slot = parkingLot.releaseVehicle(number, type);
  if (slot) {
    res.status(200).send("Vehicle released from the slot.");
  } else {
    res.status(404).send("Vehicle not found.");
  }
});

app.get("/api/revenue", (req, res) => {
  const revenue = ParkingLot.getRevenue();
  res.status(200).send({
    revenue,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Parking Lot listening on PORT ${PORT} 🚀`);
});
