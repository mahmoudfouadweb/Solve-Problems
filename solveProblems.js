// const toWeirdCase = (s) =>
//   string
//     .trim()
//     .split(" ")
//     .map((s) =>
//       s
//         .split("")
//         .map((l, idx) => (idx % 2 === 0 ? l.toUpperCase() : l.toLowerCase()))
//         .join("")
//     )
//     .join(" ");

// toWeirdCase("this man");
// console.log(toWeirdCase("this man"));
// console.log(toWeirdCase("this "));

//////////////////////////////////////////////
// First non-repeating character
// const firstNonRepeatingLetter = (s) => {
//   const arr = s?.split("");
//   let char = 'none'
//   for (let i = 0; i < arr?.length; i++) {
//     if (s.toLowerCase().indexOf(arr[i].toLowerCase()) === s.toLowerCase().lastIndexOf(arr[i].toLowerCase())) {
//       char = arr[i]
//       break;
//     }
//   }
//   return char
// };

// console.log(firstNonRepeatingLetter(''));
// console.log(firstNonRepeatingLetter("Mahmoud"));
// console.log(firstNonRepeatingLetter("stress"));
// console.log(firstNonRepeatingLetter('moonmen'));
// console.log(firstNonRepeatingLetter('a'));
// console.log(firstNonRepeatingLetter('sTreSS'));

///////////////////////////////////////////////
// Find The Parity Outlier

// function findOutlier(integers) {
//   const evenArr = [];
//   const oddArr = [];
//    integers.filter((int) => {
//     if (int % 2 !== 0) {
//      oddArr.push(int)
//     } else {
//       evenArr.push(int)
//     }
//   }).join('');
//   return oddArr.length < evenArr.length ? oddArr[0] : evenArr[0]
// }
// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

///////////////////////////////////////////////
// Isograms

function isIsogram(str) {
  if (!str) return true;
  else str.toLowerCase();
  
  const charArray = str.toLowerCase().split('');
  const sortedArray = charArray.slice().sort()
  console.log(sortedArray);
  for (let i = 0; i < charArray.length; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) return false;
  }
  return true
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(""));
