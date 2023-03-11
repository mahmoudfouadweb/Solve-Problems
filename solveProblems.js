// const toWeirdCase = (string) =>
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
function firstNonRepeatingLetter(string) {
return string.split("").map((s,i,arr) => s === arr[i++]);
}

console.log(firstNonRepeatingLetter("stress"));
