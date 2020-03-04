/*
  Say you have an array for which the ith element is the price of a given stock on day i.
  
  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
  write a function to find the maximum profit.
  
  Note that you cannot sell a stock before you buy one.

  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.       
*/

const maxProfit = (array) => {
  let sortArr = array.sort((a, b) => a - b);
  let answers = [];
  for (var i = 0; i < array.length; i++) {  
    if (array.indexOf(sortArr[i + 1]) < (array.length - 1)) {
      let downArr = sortArr.slice(i).reverse();
      let temp = downArr[downArr.length - 1] - sortArr[i]
      answers.push(temp);
      answers.sort((a,b) => b-a);
    }
  }
  return answers[0];
};

//Do not change this line or the function name
module.exports = maxProfit;

//Run this line to check your answer
//npm test ./max-profit/maxProfit.test.js
