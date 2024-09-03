// Step 1: Parent Constructor Function for Car
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}
  
  
  
  // Step 2: Child Constructor Function for Electric Car (EV)
  function EV(make, speed, charge) {
    Car.call(this, make, speed); // Inherit properties from Car
    this.charge = charge;        // Add new property for EV
  }
  
  // Link the prototypes for inheritance and set constructor
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.constructor = EV;
  
  // Step 3: Implement the chargeBattery method for EV
  EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
  };
  
  // Step 3: Override the accelerate method for EV
  EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Step 4: Create an Electric Car Object and Test Methods
  const tesla = new EV('Tesla', 120, 23); // 'Tesla' going at 120 km/h, with a charge of 23%
  
  // Test the accelerate, brake, and chargeBattery methods
  tesla.accelerate();   // Tesla going at 140 km/h, with a charge of 22%
  tesla.brake();        // Tesla is going at 135 km/h
  tesla.chargeBattery(90); // Tesla battery charged to 90%
  tesla.accelerate();   // Tesla going at 155 km/h, with a charge of 89%