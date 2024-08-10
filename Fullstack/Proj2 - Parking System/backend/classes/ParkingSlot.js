class ParkingSlot {
  constructor(type) {
    this.type = type;
    this.isOccupied = false;
    this.vehicle = null;
    this.parkedTime = Date.now();
  }

  park(vehicle) {
    this.isOccupied = true;
    this.vehicle = vehicle;
    this.parkedTime = Date.now();
  }

  release() {
    this.isOccupied = false;
    this.vehicle = null;
  }
}

module.exports = ParkingSlot;
