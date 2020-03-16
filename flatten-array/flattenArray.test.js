const flattenArray = require('./flattenArray');

test('It should flatten an array', () => {
    expect(flattenArray([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(flattenArray([1, 2, [3, 4]])).toStrictEqual([1, 2, 3, 4]);
    expect(flattenArray([[[[1, 2, 3, [[[4]]]]]]])).toStrictEqual([1, 2, 3, 4]);
    expect(flattenArray([9, [[6]], [[1, 5]], 3])).toStrictEqual([9, 6, 1, 5, 3]);
});
