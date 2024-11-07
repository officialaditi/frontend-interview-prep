// function

// function declaration

function sqaure(a) {
  return a * a;
}
console.log(sqaure(2));

// function expression

let storeFunc = function (b) {
  return b + 1;
};
console.log(storeFunc(2));

// anonymous function
// funtion with no name like storeFunc variable hold the function without name

///////////////////////////////////////////////////////////////////////////////////////////////

// first class function

// example:- 1 = assign function to variable

const sayHello = function (name) {
  console.log("hello", name);
};
sayHello("Jack");

// example:- 2 = passing function as arguments

function greet(callback) {
  callback("Bob");
}
function user(name) {
  console.log("Hey, Good Morning", name);
}
greet(user);

// example:- 3 = returning function from function

function sayName() {
  return function (name) {
    console.log("Hii", name);
  };
}
const store = sayName();
store("John Doe");

/////////////////////////////////////////////////////////////////////////////////////////////

// IIFE => immediately invoked function expression
(function add(num) {
  console.log("adding:-", num + 3);
})(2);

// output based question interviewer may asked:-
(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);
// what will be the output??
// => the output will be 1 , because the function will find the x in their own scope and if the variable is not present it will find into their parents scope, and then print 1

/////////////////////////////////////////////////////////////////////////////////////////////

// function scopes
var num1 = 20,
  num2 = 3,
  name = "Jack Smith";

function sqaureNum() {
  return num1 * num2;
}
console.log(sqaureNum()); // return 60 (20*3)
// sqaureNum function taken the variable num1 and num2 from global scope.

// nested scope function

function setScore() {
  var num1 = 20;
  num2 = 10;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(setScore()); // Jack smith scored 30

//  it overshadow the num1 and num2 global scoped and taken their own local scope variable and name is taken from global scope

// output based question of function scopes

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// for var = it print 5 with time interval of 1 milisecond 5 because as we know var doesn't have blocked scope so it print 5 for the 5 time

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
// for let = it will print 0,1,2,3,4 with time-interval of 1 milisecond as we know let have blocked scope
