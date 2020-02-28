const tripletSum = require('./tripletSum');

test('It should handle return the sum of highest three excluding duplicates', () => {
  expect(tripletSum([2,1,8,0,6,4,8,6,2,4])).toBe(18);
  expect(tripletSum([-3,-27,-4,-2,-27,-2])).toBe(-9);
  expect(tripletSum([4, 4, 4, 4, 3, 2])).toBe(9);
});
