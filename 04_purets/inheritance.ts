// Inheritance: A mechanism in OOP where a new class (subclass or derived class) inherits properties and methods from an existing class (superclass or base class).
class Animal {
    protected _speed: number = 0; // Protected property: accessible within the class and its subclasses
  
    move(distanceInMeters: number = 0) {
      this._speed = distanceInMeters / 10; // Calculate speed based on distance
      console.log(`Animal moved ${distanceInMeters}m. Speed: ${this._speed} m/s`);
    }
  }
  
  // Dog inherits from Animal
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  
    // Accessing the protected property from the subclass
    run(distanceInMeters: number) {
      super.move(distanceInMeters); // Call the parent's move method
      console.log("Dog is running!");
    }
  }
  
  const dog = new Dog();
  dog.bark();
  dog.run(20); // Accessing protected property and method from subclass
  dog.bark();
  