const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Input must be a non-negative number.');
  }

  function sumDigits(num) {

    return String(num)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  let currentSum = n;

  while (currentSum >= 10) {
    currentSum = sumDigits(currentSum);
  }

  return currentSum;
}

module.exports = {
  getSumOfDigits
};
