export class Vehicle {
  constructor(id) {
    console.log("Vehicle constructor loaded.");
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }
}
