import Level from "./classes/Level";
import ParkingSpot from "./classes/ParkingSpot";
import ParkingLot from "./classes/ParkingLot";
import Car from "./classes/VechileTypes/Car";
import Bike from "./classes/VechileTypes/Bike";
import Truck from "./classes/VechileTypes/Truck";

const level1Spot1 = new ParkingSpot(1, "BIKE");
const level1Spot2 = new ParkingSpot(2, "CAR");
const level1 = new Level(1, [level1Spot1, level1Spot2]);

const level1Spot3 = new ParkingSpot(3, "TRUCK");
const level1Spot4 = new ParkingSpot(4, "CAR");
const level2 = new Level(2, [level1Spot3, level1Spot4]);

const myParkingLot = new ParkingLot([level1, level2]);

const vehicle1 = new Car("ABC-123");
const vehicle2 = new Truck("PQR-123");
const vehicle3 = new Bike("XYZ-123");

console.log(myParkingLot.parkVehicle(vehicle1));
console.log(myParkingLot.parkVehicle(vehicle2));
console.log(myParkingLot.parkVehicle(vehicle3));
