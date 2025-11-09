const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix || !Array.isArray(matrix)) {
    return 0;
  }

  let catCount = 0;
  const CAT_SYMBOL = '^^';

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    if (Array.isArray(row)) {
 
      for (let j = 0; j < row.length; j++) {
      
        if (row[j] === CAT_SYMBOL) {
          catCount++;
        }
      }
    }
  }

  return catCount;
}

module.exports = {
  countCats
};
