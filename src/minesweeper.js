const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length === 0) {
    return [];
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const result = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {

      if (matrix[r][c]) {
  
        if (r > 0 && c > 0) result[r - 1][c - 1]++;
        if (r > 0) result[r - 1][c]++;
        if (r > 0 && c < numCols - 1) result[r - 1][c + 1]++;
  
        if (c > 0) result[r][c - 1]++;
        if (c < numCols - 1) result[r][c + 1]++;

        if (r < numRows - 1 && c > 0) result[r + 1][c - 1]++;
        if (r < numRows - 1) result[r + 1][c]++;
        if (r < numRows - 1 && c < numCols - 1) result[r + 1][c + 1]++;
      }
    }
  }


  return result;
}

module.exports = {
  minesweeper
};
