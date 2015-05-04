var helper = require('./encryption/helper');
var vigenere = require('./encryption/vigenere');
var caesar = require('./encryption/caesar');

var encrypt = function(text, key, cipher) {
    if (cipher === "caesar") {
      var shift = parseInt(key);
      return caesar.encode(text, shift);
    } else if (cipher === "vigenere") {
      key = helper.convertKey(key);
      return vigenere.encode(text, key);
    } else {

    }
  }

var decrypt = function(text, key, cipher) {
    if (cipher === "caesar") {
      var shift = parseInt(key);
      return caesar.decode(text, shift);
    } else if (cipher === "vigenere") {
      key = helper.convertKey(key);
      return vigenere.decode(text, key)
    } else {

    }
  }

module.exports = {
  encode: encrypt, 
  decode: decrypt
}
