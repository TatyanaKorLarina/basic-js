const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  const heights = arr
    .filter(item => item !== -1)
    .sort((a, b) => a - b); 
  let heightIndex = 0;
  const result = [];

  for (const item of arr) {
    if (item === -1) {
  
      result.push(-1);
    } else {
   
      result.push(heights[heightIndex]);
      heightIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
