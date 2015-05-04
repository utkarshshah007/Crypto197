var helper = require('./helper');

var vigEncrypt = function (text, key) {
  var result = "";
  for (var i = 0, j = 0; i < text.length; i++) {
    var c = text.charCodeAt(i); 
    if (helper.isUppercase(c)) {
      result += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (helper.isLowercase(c)) {
      result += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else {
      result += text.charAt(i);
    }
  }
  return result
}

var vigDecrypt = function (text, key) {
  for (var i = 0; i < key.length; i++) {
    key[i] = (26 - key[i]) % 26;
  }
  return vigEncrypt(text, key);
}

module.exports = {
  encode: vigEncrypt,
  decode: vigDecrypt
}