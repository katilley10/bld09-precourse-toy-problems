/*
  Write a function that given a strings returns the count
  of each letter in the string as a string.

  ex: countLetters('Hello') => 'h:1 e:1 l:2 o:1'
  ex: countLetters('hello') => 'h:1 e:1 l:2 o:1'
  ex: countLetters('Hello world') => 'h:1 e:1 l:3 o:2 w:1 r:1 d:1'
  ex: countLetters('Hello 123') => 'h:1 e:1 l:2 o:1'
*/


const countLetters = (string) => {
  let result = {};
  let stringResult = '';
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  for (let i = 0; i < string.length; i++) {
    if (result[string[i].toLowerCase()] === undefined && string[i] !== ' ' && numbers.indexOf(string[i]) === -1) {
      result[string[i].toLowerCase()] = 1;
    } else if (result[string[i].toLowerCase()] >= 1 && string[i] !== ' ' && numbers.indexOf(string[i]) === -1) {
      result[string[i].toLowerCase()] ++;
    }
  }
  for (let [key, value] of Object.entries(result)) {
    stringResult += (key + ':' + value);
    if (key !== Object.keys(result)[Object.keys(result).length -1]) {
      stringResult += ' ';
    }
  }
  return stringResult;
};

//Do not change this line or the function name
module.exports = countLetters;

// Run this line in the terminal to check your answer
// npm test ./count-letters/countLetters.test.js