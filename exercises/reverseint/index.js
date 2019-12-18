// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
// const myNumber = 200;
// myNumber.toString().split(''); // [ '2', '0', '0' ]
// parseInt(myNumber.toString()); // 200

// Math.sign() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

// Math.sign(4000) // 1
// Math.sign(-4000) // -1
*/

// function reverseInt(num) {
//   const reversed = parseInt(
//     num
//       .toString()
//       .split('')
//       .reverse()
//       .join('')
//   );

//   return reversed * Math.sign(num);
// }
// reverseInt(123);

function reverseInt(n) {
  const num = Math.abs(n);
  const reversed = num
    .toString()
    .split('')
    .reverse()
    .join('');
  return reversed * Math.sign(n);
}
reverseInt(123);

module.exports = reverseInt;
