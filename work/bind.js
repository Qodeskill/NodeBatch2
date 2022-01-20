// For a given function, creates a bound function that has the same body as the original function.The this object of the bound function is associated with the specified object, and has the specified initial parameters.
var student1 = {
  studentName: "Scott",
  section: "A"
};
var student2 = {
  studentName: "John",
  section: "B"
};
//function at outside the object
function calculateTotalMarks(subject1, subject2, subject3) {
  let totalMarks = subject1 + subject2 + subject3;
  let message = `Hey ${this.studentName}, your total marks is: ${totalMarks}`;
  console.log(message);
}

// var student1Calculate = calculateTotalMarks.bind(student1);
// student1Calculate(60, 70, 80);
// console.log(student1Calculate);

var student2Calculate = calculateTotalMarks.bind({
  studentName: "raj",
  section: "B+"
});
console.log(student2Calculate);
student2Calculate(56, 45, 88);
