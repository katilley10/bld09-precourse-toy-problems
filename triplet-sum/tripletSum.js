/*
  Given an array of integers, find the maximum triplet sum in the array without duplications.

  ex: tripletSum([2,1,8,0,6,4,8,6,2,4]) => 18 (8, 6, 4)
  ex: tripletSum([-3,-27,-4,-2,-27,-2]) => -9 (-4, -3, -2)
  ex: tripletSum([4, 4, 4, 4, 3, 2]) => 9 (4, 3, 2)
*/

const tripletSum = (array) => {
  array.sort();
  let bigNumbers = [];

  for (let i = array.length -1; i >= 0; i--) {
    if (bigNumbers.indexOf(array[i]) === -1 && bigNumbers.length  !== 3) {
      bigNumbers.push(array[i]);
    }
  }
  return bigNumbers[0] + bigNumbers[1] + bigNumbers[2];
};

//Do not change this line or the function name
module.exports = tripletSum;

// Run this line in the terminal to check your answer
// npm test ./triplet-sum/tripletSum.test.js