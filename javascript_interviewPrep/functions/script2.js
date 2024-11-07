// arrow function

//regular function
function sum(num) {
  return num + num;
}
console.log(sum(1));

// arrow function

let sumArrow = (num) => {
    return num + num
}
console.log(sumArrow(30))

// we can make the more simpler and one liner we have to remove the curly braces and return keyword

let sumArrow1 = (num => num + num);
console.log(sumArrow1(100))

// note:-
// if you use arrow function and using the curly braces then you have to use the keyword (return) 

