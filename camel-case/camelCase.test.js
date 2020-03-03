const camelCase = require('./camelCase');

test('It should return a string with spaces between capital letters', () => {
  expect(camelCase('camelCase')).toBe('camel Case');
  expect(camelCase('oneTwoThreeFourFive')).toBe('one Two Three Four Five');
  expect(camelCase('uniqIsEveryonesFavorite')).toBe('uniq Is Everyones Favorite');
})

test('It should handle edge cases', () => {
  expect(camelCase('OOP')).toBe('O O P');
  expect(camelCase('orderOfOperations123')).toBe('order Of Operations123');
});
