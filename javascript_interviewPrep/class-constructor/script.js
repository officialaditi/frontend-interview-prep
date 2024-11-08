// class and constructor

// constructor usually take the input from the user and bind them, and can use it as properties inside the method.

class Car {
  constructor(brand, color, year) {
    this.brand = brand;
    (this.color = color), (this.year = year);
  }

  //method
  printInfo() {
    console.log(
      `Information of cars Brand: ${this.brand}, Color:${this.color}, launch year: ${this.year} `
    );
  }
}

const car1 = new Car("Toyato", "red", "2022");
car1.printInfo();
const car2 = new Car("BMW", "Lavender", "2025");
car2.printInfo();
