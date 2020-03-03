const maxProfit = require('./maxProfit');

test('It should return the max profit', () => {
  expect(maxProfit([3, 5, 1, 9])).toBe(8);
  expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  expect(maxProfit([100, 30, 21, 144, 178, 180])).toBe(159);
});

test('It should return 0 if no profit can be made', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0);
  expect(maxProfit([1000, 100, 10, 1])).toBe(0);
});
