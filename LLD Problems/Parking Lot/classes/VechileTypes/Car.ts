import Vehicle from "../Vehicle";
import { VehicleTypes } from "../../utils/Types";

export default class Car extends Vehicle {
  constructor(numberPlate: string) {
    super(numberPlate, VehicleTypes.CAR);
  }
}
