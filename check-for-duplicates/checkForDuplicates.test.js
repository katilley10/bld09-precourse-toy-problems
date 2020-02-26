const checkForDuplicates = require('./checkForDuplicates');

test('Should return false for no duplicates', () => {
  expect(checkForDuplicates([1, 2, 3, 4])).toBe(false);
  expect(checkForDuplicates(['yes', 'no'])).toBe(false);
  expect(checkForDuplicates(['yes'])).toBe(false);
  expect(checkForDuplicates([])).toBe(false);
})

test('Should return true for duplicates', () => {
  expect(checkForDuplicates([1, 1])).toBe(true);
  expect(checkForDuplicates(['yes', 'yes'])).toBe(true);
  expect(checkForDuplicates([1, 2, 3, 3])).toBe(true);
})