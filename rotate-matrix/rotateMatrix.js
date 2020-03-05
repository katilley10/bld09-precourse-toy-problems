/*
    Given a matrix rotate it 90 degrees
    in a clockwise direction.

    ex: rotateMatrix([[1, 2, 3],    [[7, 4, 1],
                      [4, 5, 6],     [8, 5, 2],
                      [7, 8, 9]]) => [9, 6, 3]]
*/

const rotateMatrix = (matrix) => {
    let result = [];
    for (var i = 0; i < 3; i ++) {
        for (let j = 2; j >= 0; j--) {
          let temp = [];
          temp.push(matrix[j][i])
        }
        result.push(temp);
    }
  return result; 
};

//Do not change this line or function name
module.exports = rotateMatrix;

//Run this line to check your answer
//npm test ./rotate-matrix/rotateMatrix.test.js