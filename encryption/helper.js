// Tests whether the specified character code is a letter.
var isLetter = function (c) {
  return isUppercase(c) || isLowercase(c);
}

// Tests whether the specified character code is an uppercase letter.
var isUppercase = function (c) {
  return c >= 65 && c <= 90;  // 65 is the character code for 'A'. 90 is for 'Z'.
}

// Tests whether the specified character code is a lowercase letter.
var isLowercase = function (c) {
  return c >= 97 && c <= 122;  // 97 is the character code for 'a'. 122 is for 'z'.
}

// Converts key into shift values
var convertKey = function (key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
    if (isLetter(c))
      result.push((c - 65) % 32);
  }
  return result;
}

module.exports = {
  isLetter: isLetter, 
  isUppercase: isUppercase,
  isLowercase: isLowercase,
  convertKey: convertKey
}