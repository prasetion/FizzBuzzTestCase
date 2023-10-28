const cars = ["ayla", "agya", "calya"];

// for (let i = cars.length - 1; i >= 0; i--) {
//   //   const element = array[index];
//   console.log(cars[i]);
// }

const renderNumber = (number) => {
  let newNumbers = [];
  for (let i = 1; i <= number; i++) {
    newNumbers.push(i);
  }
  return newNumbers;
};

// console.log(renderNumber(50));

// const fizzbuzz = (number) => {
//   let newNumber = [];
//   for (let i = 1; i <= number.length; i++) {
//     // const element = number[i];
//     newNumber.push(i);
//   }
//   return newNumber;
// };

// console.log(fizzbuzz(15));

// fizzbuzz test case
const fizzbuzz = (number) => {
  let newNumbers = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newNumbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newNumbers.push("Fizz");
    } else if (i % 5 === 0) {
      newNumbers.push("Buzz");
    } else {
      newNumbers.push(i.toString());
    }
  }
  return newNumbers;
};

console.log(fizzbuzz(15));
