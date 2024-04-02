function Person(firstname, age) {
  this.firstname = firstname;
  this.age = age;
  console.log("nouvelle personne");
}

Person.prototype.hello = function () {
  console.log(
    "Coucou je suis " + this.firstname + " et j'ai " + this.age + " ans."
  );
};

var a = new Person("Alice", 15);
console.log("a: ", a);
a.hello();

var b = {};
Object.setPrototypeOf(b, Person.prototype);
Person.bind(b)("Bob", 21);
console.log("b: ", b);
b.hello();
