const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (typeof disksNumber !== 'number' || disksNumber <= 0) {
    throw new Error('disksNumber must be a positive number.');
  }
  if (typeof turnsSpeed !== 'number' || turnsSpeed <= 0) {
    throw new Error('turnsSpeed must be a positive number.');
  }

  const turns = Math.pow(2, disksNumber) - 1;

  const totalHours = turns / turnsSpeed;

  const totalSeconds = Math.floor(totalHours * 3600);

  return {
    turns: turns,
    seconds: totalSeconds
  };
}

module.exports = {
  calculateHanoi
};
