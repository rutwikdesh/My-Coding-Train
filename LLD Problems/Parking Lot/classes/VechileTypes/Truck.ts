import Vehicle from "../Vehicle";
import { VehicleTypes } from "../../utils/Types";

export default class Truck extends Vehicle {
  constructor(numberPlate: string) {
    super(numberPlate, VehicleTypes.TRUCK);
  }
}
