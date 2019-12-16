/* eslint-disable no-shadow */
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  str
    .toLowerCase()
    .split('')
    .filter(str => str > 'a' && str < 'z')
    .join('');
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
}
palindrome(`Madam I'm Adam`);

module.exports = palindrome;
