const countLetters = require('./countLetters');

test('It should return the correct amount of letters in a string', () => {
  expect(countLetters('Hello')).toBe('h:1 e:1 l:2 o:1');
  expect(countLetters('hello')).toBe('h:1 e:1 l:2 o:1');
  expect(countLetters('Hello world')).toBe('h:1 e:1 l:3 o:2 w:1 r:1 d:1');
});

test('It should handle empty strings', () => {
  expect(countLetters('')).toBe('');
  expect(countLetters('   ')).toBe('');
});

test('It should handle strings with numbers', () => {
  expect(countLetters('Hello 123')).toBe('h:1 e:1 l:2 o:1');
});
