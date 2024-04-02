function Person(firstname, age) {
  this.firstname = firstname;
  this.age = age;
  console.log("nouvelle personne");
}

Person.prototype.goodbye = function () {
  console.log("Good bye (" + this.firstname + ")");
};

Person.prototype.hello = function () {
  console.log(
    "Coucou je suis " + this.firstname + " et j'ai " + this.age + " ans."
  );
};

function Employee(firstname, age, company, salary) {
  Person.bind(this)(firstname, age);
  this.company = company;
  this.salary = salary;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.hello = function () {
  Person.prototype.hello.bind(this)();
  console.log(
    "Je suis salarie de " +
      this.company +
      " et je gagne " +
      this.salary +
      " euros par mois"
  );
};

var a = new Employee("Alice", 31, "JLG Consulting", 3000);
console.log("a: ", a);
a.hello();
a.goodbye();
