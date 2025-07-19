import Vehicle from "./Vehicle";
import { VehicleType } from "../utils/Types";

export default class ParkingSpot {
  spotId: number;
  type: VehicleType;
  isOccupied: boolean;
  vehicle: Vehicle | null;
  constructor(spotId: number, type: VehicleType) {
    this.spotId = spotId;
    this.type = type;
    this.isOccupied = false;
    this.vehicle = null;
  }

  canFitVehicle(vehicle: Vehicle): boolean {
    return vehicle.type === this.type && !this.isOccupied;
  }

  park(vechicle: Vehicle) {
    if (!this.isOccupied) {
      this.isOccupied = true;
      this.vehicle = vechicle;
      return true;
    }
    return false;
  }

  leave() {
    this.vehicle = null;
    this.isOccupied = false;
  }
}
