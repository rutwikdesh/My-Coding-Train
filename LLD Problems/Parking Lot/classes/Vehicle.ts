import { VehicleType } from "../utils/Types";

export default class Vehicle {
  licensePlate: string;
  type: VehicleType;
  constructor(licensePlate: string, type: VehicleType) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.licensePlate = licensePlate;
    this.type = type;
  }
}
