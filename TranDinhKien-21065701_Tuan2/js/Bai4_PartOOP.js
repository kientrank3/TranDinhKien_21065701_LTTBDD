class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;  // Enable method chaining
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;  // Enable method chaining
    }
  }
  
  // Step 2: Create the Child Class 'EVCl' extending 'CarCl'
  class EVCl extends CarCl {
    // Step 3: Make the 'charge' property private
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);  // Call the parent constructor
      this.#charge = charge;  // Initialize the private charge property
    }
  
    // Method to charge the battery
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.#charge}%`);
      return this;  // Enable method chaining
    }
  
    // Overriding the accelerate method
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this;  // Enable method chaining
    }
  }
  
  // Step 4: Create an instance of 'EVCl' and test method chaining
  const rivian = new EVCl('Rivian', 120, 23);  // 'Rivian' going at 120 km/h, with a charge of 23%
  
  // Testing chaining of methods
  rivian
    .accelerate()  // Rivian going at 140 km/h, with a charge of 22%
    .brake()       // Rivian is going at 135 km/h
    .chargeBattery(90)  // Rivian battery charged to 90%
    .accelerate()  // Rivian going at 155 km/h, with a charge of 89%
    .brake();      // Rivian is going at 150 km/h