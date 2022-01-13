
var person = {
  personName: "Raj",
  birthDay:
    function () {
      console.log(this);
      return `Happy Birthday to ${person.personName}`;
    }
};
// this.x = 100;
// console.log(this.x);
//console.log(person);
//console.log(person.personName); 
console.log(person.birthDay()); 
