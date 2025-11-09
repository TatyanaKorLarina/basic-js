const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alphabetLength = this.alphabet.length;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._process(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._process(message, key, 'decrypt');
  }

  _process(message, key, type) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex === -1) {
       
        result += char;
      } else {
 
        const keyChar = key[keyIndex % key.length];
        const keyIndexVal = this.alphabet.indexOf(keyChar);

        let newCharIndex;
        if (type === 'encrypt') {
     
          newCharIndex = (charIndex + keyIndexVal) % this.alphabetLength;
        } else {
     
          newCharIndex = (charIndex - keyIndexVal + this.alphabetLength) % this.alphabetLength;
        }
        
        result += this.alphabet[newCharIndex];
    
        keyIndex++;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}


module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
