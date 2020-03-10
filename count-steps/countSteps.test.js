const countSteps = require('./countSteps');

test('It should count the return the number of options', () => {
    expect(countSteps(2)).toBe(2);
    expect(countSteps(4)).toBe(5);
    expect(countSteps(1)).toBe(1);
    expect(countSteps(7)).toBe(21);
    expect(countSteps(10)).toBe(89);
    expect(countSteps(15)).toBe(987);
});
