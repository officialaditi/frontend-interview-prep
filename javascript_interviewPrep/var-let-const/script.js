// var vs let vs const
// scopes

var a = 5;
console.log(a); // global scope

{
  let b = 3;
  console.log(b); // block scope
}

{
    let c = 'hello';
    console.log(c)  // block scope
}

// shadowing
function checkScope() {
  let a = "hello world";
  function scope() {
    let a = "hey";
    console.log(a);
  }
  scope();
  console.log(a);
}
checkScope();
// output
//  hey
// hello world


// declaration without initialisation

var aditi ;
console.log(aditi);   // undefined

let chalo;
console.log(chalo);  // undefined

const check = 1;
console.log(check); // syntax error (to use the const variable we have to initilize the value)

// re-initilizaton of the value

var a = 'hello duniya';
a= 'hello aditi'  // re-initilize the value
console.log(a)

let number = 4
number = 22       // re-initilize the value 
console.log(number)

const word = 'beauty';
// word = 'beast'   // typeError : cannot re-assign the value to constant variable
console.log(word);

// hoisting

// using var
console.log(hello);
var hello = 'aditi';  
// undefined as we know .js move the variable and function at the top during the creation phase, and after during the execution phase they check if the varibale is their or don't during creation phase till then it give the variable value as undefined


//        temporal dead zonne


// using let;
console.log(tom);
let tom = 'cat';  // give reference error (cannot access the value before its initilize)