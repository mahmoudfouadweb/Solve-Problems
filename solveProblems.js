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
  const arr = string.split('');
  
  for (let i = 0; i < arr.length; i++) {
    const chr = arr[i];
    // console.log(chr);
    // console.log('arr.indexOf(arr[i]) :>> ', arr.indexOf(arr[i]));
    console.log('arr.lastIndexOf(arr[i]) :>> ', arr.lastIndexOf(arr[i]));
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i]
    }
    
  }
}

// function firstNotRepeatingCharacter(s) {
        
//   const arr = s.split("");

//   for(let i = 0; i < arr.length; i++){
//       let chr = arr[i];
//       if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
//           return arr[i]
//       }            
//   }
  
//   // return "_"
// }

console.log(firstNonRepeatingLetter("stress"));
// console.log(firstNotRepeatingCharacter("stress"));

// const arr = ["d", "d", "e", "e", "e", "k", "j", "j", "h"];
// const firstNonRepeating = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       console.log("arr[i]", arr[i], "arr[i + 1]", arr[i + 1]);
//       if (!count) {
//         return i;
//       }
//       count = 0;
//     } else {
//       count++;
//     }
//   }
//   return -1;
// };
// console.log(firstNonRepeating(arr));
