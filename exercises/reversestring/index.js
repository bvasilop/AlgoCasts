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

const reverse = (str) {
  let reversed = '';

  for (const character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
module.exports = reverse;
