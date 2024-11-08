// Question 1:- Write a function add that takes three arguments in a curried form. It should look like this: add(1)(2)(3); // Output: 6

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));

// Question 2:- Create a curried function multiply that takes two arguments a and b, one at a time, and returns their product. multiply(4)(5); // Output: 20

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(4)(5));

// Question 3:- Write a curried function greet that takes three arguments: greeting, name, and punctuation. Each argument should be passed one by one. It should return a full greeting message.greet("Hello")("Aditi")("!"); // Output: "Hello, Aditi!"

function Greeting(greeting) {
  return function (name) {
    return function (punctuation) {
      return `${greeting}, ${name} ${punctuation}`;
    };
  };
}
console.log(Greeting("Hello")("Aditi")("!"));

// Question 4:- Create a curried function applyDiscount that takes discount as the first argument and price as the second argument. It should return the final price after applying the discount.applyDiscount(0.1)(500); // Output: 450 (10% discount on 500)

function applyDiscount(discount) {
  return function (price) {
    return price - price * discount;
  };
}
console.log(applyDiscount(0.1)(500));

// Question 5:- Create a curried calculator function that takes an operator (+, -, *, or /) as the first argument and two numbers, a and b, as the next arguments. It should return the result based on the operator. calculator("+")(10)(5); // Output: 15
// calculator("*")(4)(5); // Output: 20

function calculator(operand) {
  return function (a) {
    return function (b) {
      if (operand === "+") return a + b;
      else if (operand === "-") return a - b;
      else if (operand === "*") return a * b;
      else if (operand === "%") return a % b;
      else return "Invalid Operand";
    };
  };
}
console.log(calculator("-")(10)(4));
