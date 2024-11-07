// function hoisting

name(); // it print the value
function name() {
  console.log("Hello, Salmon");
}

// even we hoisted the function name before its intilize it will still print the value , because function are hoisted differently means it store complete function in the creation phase so we got the value even befire we have assign it

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

// Params vs Arguments

function sqaure(num) {
  // Params
  return num * num;
}
console.log(sqaure(5)); // Arguments

// the value we give while calling the functio are = arguments
// the value which we receive are = params

/* ######################################################################################### */

// spread and rest

function checkSquare(...nums) {
  // rest operator
  console.log(nums[0] * nums[1]);
}
let arr = [5, 6];
checkSquare(...arr); // spread operator

// when we are recieving the value inside the function and using [...(anyname)] = rest
// when we are give the array value to an argument then it = spread

// output based question

// step 1
const fn = (a, numbers, x, y) => {
  // ...numbers ko error ayega check karne ke liye ... using before number
  console.log(x, y);
};
fn(1, 2, 3, 4, 5, 6, 7, 8);

// for this code we will get the error as (rest parameter should be last parameter in the list)

// step 2
const fn1 = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
console.log(fn1(1, 2, 3, 4, 5, 6, 7, 8));
// here a = 1, x= 2, y=3, and rest will taken by number [4,5,6,7,8]

// callback function

// function that take another function
function greet(name, callback) {
  //recieving callback function as param
  console.log("hello,", name + "!");
  callback();
}
// callback function
function name() {
  console.log("Have a good day");
}

// calling  main function with name callback function as arguments
console.log(greet("Aditi", name));
