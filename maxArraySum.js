//Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

function maxSubsetSum(arr) {
  let maxSum = null;
  const sums = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      sums[arr[i] + arr[j]] = j;
    }
  }
}

console.log(maxSubsetSum([3, 7, 4, 6, 5])); //13
console.log(maxSubsetSum([2, 1, 5, 8, 4])); //11
console.log(maxSubsetSum([3, 5, -7, 8, 10])); //15
