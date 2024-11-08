// currying

//function (a,b) into = function(a), function(b);

// function f(a) {
//   return function (b) {
//     console.log(a, b);
//   };
// }
// console.log(f(5)(6));

// question 1 :- sum(2)(6)(1)
                         //normal function

                 // function sum(a,b,c) {
                // return a+b+c
               // }
              // console.log(sum(2,6,1))

                         // currying function
                         
                        //  function sum(a){
                        //     return function(b){
                        //         return function(c){
                        //             return a+b+c
                        //         }
                        //     }
                        //  }
                        //  console.log(sum(2)(6)(1))
                         // in currying function take 1 argument at a time and returns a new function that accepting the next argument