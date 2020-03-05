const removeVowels = require('./removeVowels');

test('It should remove vowels from a string', () => {
  expect(removeVowels('hello')).toBe('hll');
  expect(removeVowels('aeiouy')).toBe('');
  expect(removeVowels('hello world')).toBe('hll wrld');
  expect(removeVowels('checking answers')).toBe('chckng nswrs');
});

test('It should handle uppercase and lowercase', () => {
  expect(removeVowels('hELlo')).toBe('hLl');
  expect(removeVowels('AeIOuy')).toBe('');
  expect(removeVowels('HELLO WORLD')).toBe('HLL WRLD');
});
