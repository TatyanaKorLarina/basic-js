const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  let totalSum = 0;
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const hauntedColumns = new Array(numCols).fill(false);

  for (let r = 0; r < numRows; r++) {
   
    for (let c = 0; c < numCols; c++) {
     
      if (!hauntedColumns[c]) {
        const currentValue = matrix[r][c];
        
        if (currentValue === 0) {
        
          hauntedColumns[c] = true;
        } else {
        
          totalSum += currentValue;
        }
      }
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
