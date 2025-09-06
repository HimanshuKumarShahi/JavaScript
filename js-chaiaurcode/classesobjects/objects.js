function multiply(num) {
  return num * 5;
}
// console.log(multiply(5));
// console.log(multiply.power=2);
// console.log(multiply.prototype);

function product(items, price) {
  this.items = items;
  this.price = price;
}
product.prototype.increment = function () {
  this.price++;
};

product.prototype.printme = function () {
  console.log(`items: ${this.items} and price: ${this.price}`);
};
const tea = new product("lemonTea", 40);
const coffee = new product("blackcoffee", 120);

tea.printme();
tea.increment();

coffee.increment();
coffee.printme();

// The new, prototype, and this keywords are fundamental in JavaScript for creating and managing objects,
//  inheritance, and context within functions

// new Keyword
// Purpose: Used to create new instances of objects from a constructor function or class.

// function User(name) {
//   this.name = name;
// }
// let user1 = new User("Alice")

// prototype Property
// Purpose: Enables inheritance. All functions (used as constructors) have a .prototype property, which is an object where shared properties and methods are defined.

// User.prototype.greet = function() {
//   console.log("Hello " + this.name);
// };
// user1.greet();

// this Keyword
// Purpose: Refers to the object on which the current method is being called or, in the context of object creation, the newly created object from the constructor

// function Car(model) {
//   this.model = model; 
// }
// let myCar = new Car("Toyota");