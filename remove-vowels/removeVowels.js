/*
  Write a function that removes the vowels from a string

  ex: removeVowels('hello') => 'hll';
  ex: removeVowels('aeiouy') => '';
  ex: removeVowels('HELLo') => 'HLL';
*/

const removeVowels = (string) => {
  let vowels = ['a','e','i','o','u','y'];
  let result = [];
  for (var i = 0; i < string.length; i++) {
    if (indexOf(string[i].toLowerCase()) === -1) {
      result.push(string[i]);
    }
  }
  return result.join('');
};

//Do not change this line or the function name
module.exports = removeVowels;

//Run this line to check your answer
//npm test ./remove-vowels/removeVowels.test.js