function hourglassSum(arr) {
  let largestSum = null;
  for (let i = 0; i < arr.length - 2; i++) {
    let firstRow = arr[i];
    let secondRow = arr[i + 1];
    let thirdRow = arr[i + 2];
    for (let j = 0; j < firstRow.length - 2; j++) {
      let hourglass = [
        firstRow[j],
        firstRow[j + 1],
        firstRow[j + 2],
        secondRow[j + 1],
        thirdRow[j],
        thirdRow[j + 1],
        thirdRow[j + 2],
      ];
      const reducer = (accumulator, currentVal) => accumulator + currentVal;
      let sum = hourglass.reduce(reducer);
      if (largestSum === null || sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  return largestSum;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
