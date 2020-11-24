function bubbleSort(array) {
  let swaps = swapEls(array, 0);
  while (swaps > 0) {
    swaps = swapEls(array, 0);
  }
  return array;
}

function swapEls(ar, swaps) {
  for (let i = 0; i < ar.length; i++) {
    let currentEl = ar[i];
    if (currentEl > ar[i + 1]) {
      let temp = ar[i];
      ar[i] = ar[i + 1];
      ar[i + 1] = temp;
      swaps++;
    }
  }
  return swaps;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));

function countSwaps(a) {
  let numSwaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        numSwaps++;
        swap(a[i], a[j]);
      }
    }
  }
  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
