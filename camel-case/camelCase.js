/*
  Write a function that breaks up camel casing 
  using a space between capital letters
  
  camelCase('testFunction') => 'test Function'
  camelCase('asyncLectureOnTheFourth') => 'async Lecture On The Fourth'
  camelCase('testTHREE') => 'test T H R E E'
*/

const camelCase = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === string[i]) {
      result += string[i];
    } else if (string[i].toLowerCase() !== string[i] && i !== 0) {
      result += (' ' + string[i]);
    } else if (string[i].toLowerCase() !== string[i] && i === 0) {
      result += string[i];
    }
  }
  return result;
};

//Do not change this line or the function name
module.exports = camelCase;

//Run this line to check your answer
//npm test ./camel-case/camelCase.test.js
