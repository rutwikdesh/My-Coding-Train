import Level from "./Level";
import Vehicle from "./Vehicle";

export default class ParkingLot {
  levels: Array<Level>;
  constructor(levels: Array<Level>) {
    this.levels = levels;
  }

  parkVehicle(vehicle: Vehicle) {
    for (let level of this.levels) {
      const spot = level.parkVehicle(vehicle);
      if (spot) {
        return `Vehicle parked at level ${level.levelId}`;
      }
    }
    return `Vechicle can't be parked. No spot available`;
  }

  leaveSpot(vehicle: Vehicle) {
    for (let level of this.levels) {
      if (level.leaveSpot(vehicle)) {
        return `${vehicle.type} with license plate ${vehicle.licensePlate} left the parking`;
      }
    }
    return `Vehicle with plate ${vehicle.licensePlate} not found.`;
  }
}
