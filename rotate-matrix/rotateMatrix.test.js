const rotateMatrix = require('./rotateMatrix');

test('It should rotate a matrix 90 degrees clockwise', () => {
    expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    expect(rotateMatrix([[1, 2], [3, 4]])).toStrictEqual([[3, 1], [4, 2]]);
    expect(rotateMatrix([[9, 3], [2, 7]])).toStrictEqual([[2, 9], [7, 3]]);
});
