var crypto = require('./index');
var program = require('commander'); 

program._name = "crypto197shahutk";

program
  .version('0.0.1')
  .description('A tool to encrypt and decrypt using Caesar and Vigenere ciphers')
  .option('-e, --encode', 'Encrypt text')
  .option('-d, --decode', 'Decrypt text')
  .option('-c, --caesar', 'Use a Caesar cipher')
  .option('-v, --vigenere', 'Use a Vigenere cipher')
  .parse(process.argv);

if (!(program.encode || program.decode)) {
  console.log("must specify encrypt or decrypt option");
  process.exit();
}

if (!(program.caesar || program.vigenere)) {
  console.log("must specify a program type");
  process.exit();
}

if (program.args.length < 2) {
  console.log("not enough arguments - must have text and key");
  process.exit();
}

var text = program.args.pop();
var key = program.args.pop();

var output = 'Nothing Happened';

if (program.encode && program.caesar) {
  output = crypto.encrypt(text, key, "caesar");
} else if (program.encode && program.vigenere) {
  output = crypto.encrypt(text, key, "vigenere");
} else if (program.decode && program.caesar) {
  output = crypto.decrypt(text, key, "caesar");
} else if (program.decode && program.vigenere) {
  output = crypto.decrypt(text, key, "vigenere");
}

console.log(output);