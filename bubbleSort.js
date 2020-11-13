function bubbleSort(array) {
  debugger;
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
