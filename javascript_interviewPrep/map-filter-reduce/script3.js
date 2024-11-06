// map-filter-reduce

// chaining the method is allow in map-filter-reduce

const kids = [
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
    mark: 70,
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
    mark: 40,
    roll_number: "40",
  },
];

// Question - 1
// return only name of the students who's mark is greater than 60
// using filter and map

const check = kids
  .filter((stu) => {
    if (stu.mark > 60) {
      return stu;
    }
  })
  .map((stu) => {
    return stu.name;
  });

console.log(check);

// Question - 2
// return total marks for students with mark greater than 60 , after add 20 mark to student whose mark is less than 50;
// map and reduce

const addMark = kids.map((stud) => {
    if(stud.mark < 50){
        stud.mark  = stud.mark + 20
    }
    return stud
}).filter((stud) => {
    if(stud.mark > 60){
        return stud
    }
}).reduce((acc, currVal) => {
    return acc + currVal.mark
},0)
console.log(addMark)

