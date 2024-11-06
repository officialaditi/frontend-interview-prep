// map - filter - reduce

// map array method

const number = [1, 2, 3, 4, 5];

const multiply = number.map((num) => {
  return num * 2;
});

console.log(multiply); // map new array
console.log(number); // original array

// filter array method

const words = ["happy", "sad", "confused", "worry"];
const bigWord = words.filter((word) => {
  if (word.length <= 3) {
    return word;
  }
});
console.log(bigWord); // sad  filter array
console.log(words); // doesn't change the original array

// reduce array method

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, currVal) => {
  return acc + currVal;
}, 0); // 0 is initial value
console.log(sum);
console.log(nums)



