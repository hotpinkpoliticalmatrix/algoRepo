/*Given an array arr consisting of N integers, sorted in ascending order 
(least to greatest), and a separate number (a sum), determine if any 2 numbers 
in the array add up to the sum. Return true if any 2 different numbers within 
the array add up to sum. Return false if no 2 numbers in the array add up to sum.*/

// const pairSum = (ar, val) => {
//   debugger;
//   let start = 0;
//   let end = ar.length - 1;
//   while (ar[start] < ar[end]) {
//     if (ar[start] + ar[end] === val) return true;
//     else if (ar[start] + ar[end] > val) end--;
//     else start++;
//   }
//   return false;
// };

// console.log(pairSum([1, 1, 2, 3, 4, 5], 7)); // true (either 2+5 or 3+4)
// console.log(pairSum([1, 2, 3, 4, 5], 10)); // false
// console.log(pairSum([0, 2, 3, 6, 9, 10], 10)); // true (0 + 10)
// console.log(pairSum([1, 2, 3, 7, 8], 7)); // false
// console.log(pairSum([-2, 0, 4, 6, 10], 8)); // true (-2 + 10)
// console.log(pairSum([1, 2, 3, 4, 5], 2)); // false

// console.log(pairSum([1], 2)); // false
// console.log(pairSum([2], 2)); // false
// console.log(pairSum([], 1)); // false

// const productSum = (array, sum = 0, depth = 1, prev = null) => {
//   debugger;
//   if (array.length === 0) {
//     return sum;
//   } else {
//     if (typeof array[0] === "number") {
//       if (Array.isArray(prev)) depth--;
//       sum += array[0] * depth;
//       return sum + productSum(array.slice(1), sum, depth, array[0]);
//     } else {
//       depth++;
//       let nestedAr = array[0];
//       return sum + productSum(nestedAr, sum, depth, prev);
//     }
//   }
// };

const productSum = (array, sum = 0, depth = 1, prev = null) => {
  debugger;
  if (array.length === 0) {
    return sum;
  } else {
    if (typeof array[0] === "number") {
      if (Array.isArray(prev)) depth--;
      sum += array[0] * depth;
      return sum + productSum(array.slice(1), sum, depth, array[0]);
    } else {
      depth++;
      let nestedAr = array[0];
      return (sum += productSum(nestedAr, sum, depth, array[0]));
    }
  }
};

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
