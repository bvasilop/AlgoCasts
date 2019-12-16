// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

function reverse(str) {
  let reversed = '';

  for (const character of str) {
    reversed = character + reversed;
    // take each character and add it on to the beginning of the string let reversed =''
    // h -> eh -> leh -> lleh -> olleh
  }

  return reversed;
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
