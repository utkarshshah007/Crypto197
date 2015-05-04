var helper = require('./helper');

var caesarShift = function (text, shift) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if (helper.isUppercase(c)) {
      result += String.fromCharCode((c - 65 + shift) % 26 + 65);
    } else if (helper.isLowercase(c)) {
      result += String.fromCharCode((c - 97 + shift) % 26 + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

var reverseCaesarShift = function (text, shift) {
    reverseShift = (26 - shift) % 26;
    return caesarShift (text, reverseShift)
}

module.exports = {
  encode: caesarShift,
  decode: reverseCaesarShift
}