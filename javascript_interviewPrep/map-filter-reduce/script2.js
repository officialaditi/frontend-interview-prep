// array method = map, filter, reduce

// output based question

// Question-1 = return the name of the student in the capital letter
const students = [
  {
    id: 1,
    name: "Aditi Gaikwad",
    mark: 90,
    roll_number: "15",
  },
  {
    id: 2,
    name: "Raj Sharma",
    mark: 90,
    roll_number: "105",
  },
  {
    id: 3,
    name: "Priya Singh",
    mark: 60,
    roll_number: "66",
  },
  {
    id: 4,
    name: "Karan Patel",
    mark: 80,
    roll_number: "99",
  },
  {
    id: 5,
    name: "Ananya Verma",
    mark: 50,
    roll_number: "40",
  },
];

// using the map method
const writingName = students.map((student) => {
    return student.name.toLocaleUpperCase();
})
console.log(writingName) // give only name with captial letter
console.log(students)  // orginal array

// using the for loop method
let names = [];
for(let i = 0; i< students.length; i++){
    names.push(students[i].name.toLocaleUpperCase());
}
console.log('this is for loop method', names)
// work same but increase the code and its make the code little messsy


// Question-2 = return the student only who scored marks less or equal to 60
const checkMarks = students.filter((student) => {
    if(student.mark <= 60){
        return student.name
    }
})
console.log(checkMarks) // it return the 1 array of id = 3 whose marks is less or equal to 60


// Question-3 = return the student whose marks are more than 60 and roll number is greater than 100
const details = students.filter((student) => {
    if(student.mark > 60 && student.roll_number > 100){
        return student.name
    }
})
console.log('this is details',details) // return id = 2

// Question-4 = calculate the sum of all the marks
const calculate = students.reduce((acc, currVal) => {
    return acc + currVal.mark
},0);
console.log(calculate)