//Abstract classes
class Person {
  personName;
  age;

  constructor(personName, age) {
    if (this.constructor == Person) {
      throw new Error("Abstract class Person can't be instantiated");
    }
    this.personName = personName;
    this.age = age;
  }

  getDetails() {
    return `Person Name: ${this.personName}, Age: ${this.age}`;
  }
}
class Teacher extends Person {
  mainSubject;

  constructor(personName, age, mainSubject) {
    super(personName, age); //invoke parent class's constructor
    this.mainSubject = mainSubject;
  }

  getDetails() {
    return `${super.getDetails()}, Main Subject: ${this.mainSubject}`;
  }
}

//parent class
//var person = new Person("John", 30); //Error
//console.log(person);

//child class
var teacher = new Teacher("Jones", 25, "Chemistry");
console.log(teacher);
console.log(teacher.getDetails()); 
