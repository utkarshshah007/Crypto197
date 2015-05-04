function vigEncrypt(text, key) {
  var result = "";
  for (var i = 0, j = 0; i < text.length; i++) {
    var c = text.charCodeAt(i); 
    if (isUppercase(c)) {
      result += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (isLowercase(c)) {
      result += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else {
      result += text.charAt(i);
    }
  }
  return result
}

function vigDecrypt(text, key) {
  for (var i = 0; i < key.length; i++) {
    key[i] = (26 - key[i]) % 26;
  }
  return vigEncrypt(text, key);
}

function caesarShift(text, shift) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if (isUppercase(c)) {
      result += String.fromCharCode((c - 65 + shift) % 26 + 65);
    } else if (isLowercase(c)) {
      result += String.fromCharCode((c - 97 + shift) % 26 + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

function reverseCaesarShift(text, shift) {
    reverseShift = (26 - shift) % 26;
    return caesarShift (text, reverseShift)
}

// Converts key into shift values
function convertKey(key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
    if (isLetter(c))
      result.push((c - 65) % 32);
  }
  return result;
}

// Tests whether the specified character code is a letter.
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

// Tests whether the specified character code is an uppercase letter.
function isUppercase(c) {
  return c >= 65 && c <= 90;  // 65 is the character code for 'A'. 90 is for 'Z'.
}

// Tests whether the specified character code is a lowercase letter.
function isLowercase(c) {
  return c >= 97 && c <= 122;  // 97 is the character code for 'a'. 122 is for 'z'.
}

var encrypt = function(text, key, cipher) {
    if (cipher === "caesar") {
      return caesarShift(text, key);
    } else if (cipher === "vigenere") {
      key = convertKey(key);
      return vigEncrypt(text, key);
    } else {

    }
  }

var decrypt = function(text, key, cipher) {
    if (cipher === "caesar") {
      return reverseCaesarShift(text, key);
    } else if (cipher === "vigenere") {
      key = convertKey(key);
      return vigDecrypt(text, key)
    } else {

    }
  }

module.exports = {
  encode: encrypt, 
  decode: decrypt
}
