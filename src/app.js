import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";

let car = new Car(12);
let drone = new Drone(14);

console.log(JSON.stringify(car));
console.log(JSON.stringify(drone));
