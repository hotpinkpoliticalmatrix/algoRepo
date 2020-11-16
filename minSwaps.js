function minimumSwaps(arr) {
  let swaps = 0;
  const arrCopy = arr.slice().sort((a, b) => a - b);
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrCopy[i]) {
      swaps++;
      let currentEl = arr[i];
      swap(arr, i, hash[arrCopy[i]]);
      hash[currentEl] = hash[arrCopy[i]];
      hash[arrCopy[i]] = i;
    }
  }
  return swaps;
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(minimumSwaps([2, 3, 4, 1, 5])); //3

// [1, 2, 3, 4, 5];

const hash = {
  2: 0,
  3: 1,
  4: 2,
  1: 3,
  5: 4,
};
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); //3
console.log(minimumSwaps([4, 3, 1, 2])); //3
