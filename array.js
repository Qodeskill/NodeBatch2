// let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// fruits.forEach((a, b, c) => {
//     console.log(a, b, c)
// })


// let pushele = fruits.push('Orange')
// let popele = fruits.pop();

// let pushele = fruits.unshift('Orange')
// let popele = fruits.shift();
// console.log("popele : ", popele)

// let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// console.log(fruits)
// console.log(fruits.indexOf("kiwi"))
// let pos = -7
// let n = 4
// let removedItems = fruits.splice(pos, n)
// // this is how to remove items, n defines the number of items to be removed,
// // starting at the index position specified by pos and progressing toward the end of array.

// console.log(removedItems)
// console.log(fruits)

// let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// console.log(fruits.slice(2, 5))      //+ +
// console.log(fruits.slice(2, -3))      //+ -
// console.log(fruits.slice()))      //- +
// console.log(fruits.slice(-6, -3))      //- -
// console.log(fruits.slice(7, 4))      //- -


let fruits = ['Apple', 'ananas', 'Avocado', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
let numarray = [2, 31, 333, 223, 22, 65, 76, 44, 45, 44445, 4, 86, 43, 34, 46, 68, 12, 14, 66, 78]
let numarray1 = [2, 31, 34, 12, 14]

// console.log(numarray.includes(2));
// console.log(fruits.includes('kiwi'));
// console.log(fruits.includes('berries'));

// // console.log(numarray.sort())
// console.log(fruits.sort((a, b) => {
//     console.log(a, " - ", b, " - ", a - b)
//     return a - b
// }))


// const check = (param) => param < 40;
// const check = function (param) {

//     console.log(param)
//     return param < 40
// }
// console.log(numarray1.every(check));

// const result = fruits.filter(fruit => fruit.length < 5);
// console.log(result);

// console.log(fruits.filter((ele, index, array) => console.log(index, " - ", ele, " - ")))

// console.log(numarray1);
// const map1 = numarray1.map(x => x * 2);
// console.log(map1);

// function reducer(previous, current, index, array) {
//     const returns = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//     return returns;
// }
// console.log(numarray1.reduce(reducer));

// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(numarray1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));

//// 4/01


// Spread syntax (...)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let movements_deposit = [200, 450,  3000, 70, 1300];
// let movements_withdra = [-400,  -650, -130];
// const amt = [1200,950]

//  movements_deposit = [...movements_withdra, ...movements_deposit  ]

// console.log(newArray);
// console.log(newArray.sort());



// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);

// 9/12
// array destructuring

// let x=10,y=20;
// [x,y]=[y,x];
//  console.log("x : ",x);
//  console.log("y : ",y);

//  function result(m1,m2,m3)
// {
//   return[
//     m1+m2+m3,
//     (m1+m2+m3)/3,
//   ]
// }
// let [total,percentage] = result(43,54,65);
// console.log(total," - ",percentage);

// function getMarks()
// {
//   return [34,54,65,54,65]
// }
//  let marks = getMarks();
// //  console.log(marks);

//  let [m1,m2,m3,...m4] = getMarks();
// console.log("m1 ",m1);
// console.log("m2 ",m2);
// console.log("m3 ",m3);
// console.log("m4 ",m4);
