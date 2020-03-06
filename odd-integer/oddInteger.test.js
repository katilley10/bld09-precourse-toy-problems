const oddInteger = require('./oddInteger');

test('It should handle one odd integer', () => {
    expect(oddInteger([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toBe(5);
    expect(oddInteger([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
    expect(oddInteger([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toBe(5);
    expect(oddInteger([10])).toBe(10);
    expect(oddInteger([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
    expect(oddInteger([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1);
});

test('It should handle multiple odd integers', () => {
    expect(oddInteger([1, 1, 1, 2])).toStrictEqual([1, 2]);
    expect(oddInteger([5, 7, 5, 7, 3, 2, 3, 3])).toStrictEqual([2, 3]);
    expect(oddInteger([1, 1, 1, 2, 2, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(oddInteger([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
