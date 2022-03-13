  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // Takes two parameters, accumulator and currentValue
console.log(sum)

let sum2 = nums.reduce((acc, curr) => { // Expanded version of above code 
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}); // No specified initial value to use as accumulator means it defaults to the first element in the array and the process starts with the second element and the callback function will execute four times
console.log(sum2)

let sum3 = nums.reduce((acc, curr) => { // Expanded version of above code 
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 0); // Specified initial value to use as accumulator means the function executes five times
console.log(sum3)

let sum4 = nums.reduce((acc, curr) => { // Expanded version of above code 
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 10); // Specified initial value to use as accumulator means the function executes five times
console.log(sum4)

let sum5 = nums.reduce((acc, curr) => acc + curr, 0); // Takes two parameters, accumulator and currentValue
console.log(sum5)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
