class Person {
  constructor(firstname, age) {
    this.firstname = firstname;
    this.age = age;
  }

  hello() {
    console.log(`Coucou je suis ${this.firstname} et j'ai ${this.age} ans.`);
  }
}

const a = new Person("Alice", 15);
console.log("a: ", a);
a.hello();
