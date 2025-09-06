# class or object notes.

-Classes and objects in JavaScript help organize and reuse code using object-oriented programming concepts

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  start() {
    console.log(`${this.name} starts!`);
  }
}
```

```js
To create an object, use new ClassName():

const myCar = new Car("Ford", 2014);
myCar.start();
```

 new , this keyword use ... 