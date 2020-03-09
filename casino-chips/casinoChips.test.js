const casinoChips = require('./casinoChips');

test('It should return the correct amount of bets possible', () => {
    expect(casinoChips([1, 100, 1])).toBe(2);
    expect(casinoChips([2, 2, 1])).toBe(2);
    expect(casinoChips([2, 2, 2])).toBe(3);
    expect(casinoChips([0, 0, 0])).toBe(0);
    expect(casinoChips([13, 19, 27])).toBe(29);
    expect(casinoChips([8, 12, 7])).toBe(13);
});
