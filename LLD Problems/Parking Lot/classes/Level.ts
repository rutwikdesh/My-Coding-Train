import ParkingSpot from "./ParkingSpot";
import Vehicle from "./Vehicle";

export default class Level {
  levelId: number;
  spots: Array<ParkingSpot>;
  constructor(levelId: number, spots: Array<ParkingSpot>) {
    this.levelId = levelId;
    this.spots = spots;
  }

  parkVehicle(vehicle: Vehicle) {
    for (let spot of this.spots) {
      if (spot.canFitVehicle(vehicle)) {
        spot.park(vehicle);
        return spot;
      }
    }
    return null;
  }

  leaveSpot(vehicle: Vehicle) {
    for (let spot of this.spots) {
      if (
        spot.isOccupied &&
        spot.vehicle?.licensePlate === vehicle.licensePlate
      ) {
        spot.leave();
        return true;
      }
    }
    return false;
  }

  getAvailableSpots() {
    return this.spots.filter((spot) => !spot.isOccupied);
  }
}
