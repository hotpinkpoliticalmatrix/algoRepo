// const subsetSum = (target, ar) => {
//   debugger;
//   let sums = [0];
//   for (let i = 0; i < ar.length; i++) {
//     let sumCopy = [...sums];
//     for (let j = 0; j < sumCopy.length; j++) {
//       let curSum = sumCopy[j] + ar[i];
//       if (curSum === target) {
//         return true;
//       } else if (curSum < target) {
//         sums.push(curSum);
//       }
//     }
//   }
//   return false;
// };

function subsetSum(target, nums, idx = 0) {
  debugger;
  // if we've hit 0 we're done!
  if (target === 0) return true;
  // stop trying and return false if the target is negative OR if we've reached the end of the array
  if (target < 0 || idx === nums.length) return false;
  const num = nums[idx];
  // capture the boolean result for the possibility of *excluding* the current number from the sum
  // recursively try with the same target, but continue onto the next index
  const whenExcluded = subsetSum(target, nums, idx + 1);
  // capture the boolean result for the possibility of *including* the current number in the sum
  // recursively try with the target minus this number and continue onto the next index
  const whenIncluded = subsetSum(target - num, nums, idx + 1);
  // return whether either possibility came back true
  return whenExcluded || whenIncluded;
}

console.log(subsetSum(2, [1, 10, 5, 3])); // false
console.log(subsetSum(10, [1, 10, 5, 3])); // true
console.log(subsetSum(9, [1, 10, 5, 3])); // true
console.log(subsetSum(19, [1, 10, 5, 3])); // true
console.log(subsetSum(17, [1, 10, 5, 3])); // false
