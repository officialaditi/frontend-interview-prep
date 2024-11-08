// closures

// lexical scope

let globalVar = "im global variable";

function show() {
  let name = "im show function variable";
  function display() {
    let name = "aditi"; // this variable is accessible only on this function scope
    console.log(name);
  }

  display();
}

show();
