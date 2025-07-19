import Vehicle from "../Vehicle";
import { VehicleTypes } from "../../utils/Types";

export default class Bike extends Vehicle {
  constructor(numberPlate: string) {
    super(numberPlate, VehicleTypes.BIKE);
  }
}
