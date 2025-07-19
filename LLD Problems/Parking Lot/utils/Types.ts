export const VehicleTypes = {
  CAR: "CAR",
  BIKE: "BIKE",
  TRUCK: "TRUCK",
} as const;

export type VehicleType = keyof typeof VehicleTypes;
