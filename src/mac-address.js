const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n !== 'string') {
    return false;
  }

  if (n.length !== 17) {
    return false;
  }
  
  const groups = n.split('-');

  if (groups.length !== 6) {
    return false;
  }

  const hexChars = new Set('0123456789ABCDEF');

  for (const group of groups) {

    if (group.length !== 2) {
      return false;
    }

    for (const char of group) {
      if (!hexChars.has(char)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};
