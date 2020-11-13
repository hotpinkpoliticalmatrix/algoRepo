/*Given an array of distinct integers and an integer representing a target sum, 
write a function that returns an array of all triplets in the input array that 
sum to the target sum. */

const arrayThreeSum = (ar, target) => {
  let solution = [];
  for (let i = 0; i < ar.length - 1; i++) {
    debugger;
    let firstLoop = ar[i];
    let currSum = target - firstLoop;
    let cache = {};
    debugger;
    for (let j = i + 1; j < ar.length; j++) {
      debugger;
      let secondLoop = ar[j];
      if (cache[currSum - secondLoop]) {
        solution.push([firstLoop, currSum - secondLoop, secondLoop]);
      } else {
        cache[secondLoop] = true;
      }
    }
  }
  return solution;
};

function arrayThreeSum(arr, targetSum) {
  const solution = [];
  for (let i = 0; i < arr.length - 1; i++) {
    //the sum needed given we already know one element arr[i]
    let currentSum = targetSum - arr[i];
    //create a hash table to store all of the integers from arr[i] we have tried
    let memo = {};
    for (let j = i + 1; j < arr.length; j++) {
      if (memo[currentSum - arr[j]]) {
        solution.push([arr[i], currentSum - arr[j], arr[j]]);
      } else {
        memo[arr[j]] = true;
      }
    }
  }
  return solution;
}

console.log(arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35)); //should return []
console.log(arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10)); //should return [[ -3, 1, 12 ]]
