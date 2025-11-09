const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (typeof n !== 'number' || n < 0) {
 
    throw new Error('Input must be a positive number.');
  }

  const s = String(n);
  let maxNum = 0;

  for (let i = 0; i < s.length; i++) {

    const newS = s.slice(0, i) + s.slice(i + 1);
  
    const newNum = Number(newS);

    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
