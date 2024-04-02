class Person {
  constructor(firstname, age) {
    this.firstname = firstname;
    this.age = age;
  }

  hello() {
    console.log(`Coucou je suis ${this.firstname} et j'ai ${this.age} ans.`);
  }

  goodbye() {
    console.log(`Good bye (${this.firstname})`);
  }
}

class Employee extends Person {
  constructor(firstname, age, company, salary) {
    super(firstname, age);
    this.company = company;
    this.salary = salary;
  }

  hello() {
    super.hello();
    console.log(
      `Je suis salarie de ${this.company} et je gagne ${this.salary} euros par mois`
    );
  }
}

const a = new Employee("Alice", 31, "JLG Consulting", 3000);
console.log("a: ", a);
a.hello();
a.goodbye();
