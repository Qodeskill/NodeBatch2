//call
var person = {
  age: 20
};

let birthDay = function (years) {
  console.log(person);
  console.log(years);
  this.age += years;
};

console.log(person.age);
birthDay.call(person, 3); //Calls a method of an object, substituting another object for the current object.
console.log(person.age);
