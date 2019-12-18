/* eslint-disable no-shadow */
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   str
//     .toLowerCase()
//     .split('')
//     .filter(str => str > 'a' && str < 'z')
//     .join('');
//   return (
//     str ===
//     str
//       .split('')
//       .reverse()
//       .join('')
//   );
// }
// palindrome(`Madam I'm Adam`);

// function palindrome(str) {
//   return str.split('').reduce((rev, char) => char + rev, '') === str;
// }
// palindrome(`Madam I'm Adam`);

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversed;
// }
// palindrome(`Madam I'm Adam`);

function palindrome(str) {
  return str
    .split('')
    .every((char, index) => char === str[str.length - index - 1]);

  // the first time we run our function we are at index 0.
  // We could look at the entire string array and access the element at the length of the array minus one -- meaning the end of the array.
  //  we increment for every step through the loop or through every function
  // minus one and the minus one right here is to make sure that we are taking into account the fact that length is the overall length.
  // We are zero indexed with javascript arrays.
}
palindrome(`Madam I'm Adam`);

// function palindrome(str) {
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// }
// palindrome(`Madam I'm Adam`);

module.exports = palindrome;
