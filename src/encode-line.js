const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  
  if (str.length === 0) {
      return '';
  }

  let encodedString = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      count++;
    } else {

      encodedString += (count > 1 ? count : '') + str[i];

      count = 1;
    }
  }

  return encodedString;
}


module.exports = {
  encodeLine
};
