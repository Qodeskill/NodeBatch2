var student = {
  studentName: "Scott",
  email: "scott@gmail.com",
  branch: "CS",
  physics: 60,
  chemistry: 70,
  maths: 80
};

for (let prop in student) {
  // console.log(prop)
  console.log(prop, " - ", student[prop]);

  // if (prop == "physics" || prop == "chemistry" || prop == "maths") {
  //   student[prop] = student[prop] + 5;
  // }
}

// console.log(student);
