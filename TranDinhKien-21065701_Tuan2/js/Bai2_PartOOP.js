class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Step 2: Implement the Accelerate Method
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Step 2: Implement the Brake Method
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Step 3: Getter for Speed in mi/h
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Step 3: Setter for Speed in mi/h
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  // Step 4: Create a New Car Object and Test Methods
  // Test data: 'Ford' going at 120 km/h
  const car1 = new CarCl('Ford', 120);
  
  // Test the accelerate and brake methods
  car1.accelerate(); // Ford is going at 130 km/h
  car1.brake();      // Ford is going at 125 km/h
  
  // Test the getter and setter for speed in mi/h
  console.log(car1.speedUS); // Get speed in mi/h -> 125 / 1.6 = 78.125 mi/h
  
  car1.speedUS = 50;         // Set speed in mi/h -> 50 * 1.6 = 80 km/h
  console.log(car1.speed);   // Log new speed in km/h -> 80 km/h
  
  car1.accelerate(); // Ford is going at 90 km/h
  car1.brake();      // Ford is going at 85 km/h