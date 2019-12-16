/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   str = str.toLowerCase().split('');
//   for (let i = 0; i < str.length / 2; i++) {
//     const currentLetter = str[i];
//     str[i] = str[str.length - 1 - i];
//     str[str.length - 1 - i] = currentLetter;
//   }
//   return str.join('');
// }
// reverse('Hello');

// const reverse = str =>
//   str
//     .toLowerCase()
//     .split('')
//     .reverse()
//     .join('');
// reverse('Hello');

function reverse(str) {
  let reversed = '';

  for (const character of str) {
    reversed = character + reversed;
    debugger; // chapter 3 debugger statements
    // take each character and add it on to the beginning of the string let reversed =''
    // h -> eh -> leh -> lleh -> olleh
  }

  return reversed;
}
reverse('hello');

// function reverse(str) {
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
//   // Reduce is used to take all the different values with an array and condense them all down to one singular value
//   // Reduce takes two separate arguments. The first one is going to be an arrow function the second argument is
//   // going to be a starting initial value for our function which will be passed into the empty string.
// }

// function reverse(str) {
//   debugger; // cd into directory(reversestring) and `node inspect index.js`
//   // https://nodejs.org/en/docs/inspector
//   // c, cont for continue debugging
//   // run command repl to inspect
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
// }
// reverse('hello');

module.exports = reverse;
