import { Vehicle } from "./vehicle.js";

export class Drone extends Vehicle {
  constructor(id) {
    super(id);
    console.log("Drone constructor loaded.");
  }
}
