import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
  constructor() {
    super(12);
    console.log("car constructor loaded.");
  }
}
