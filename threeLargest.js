function findThreeLargestNumbers(array) {
  debugger;
  const largest = [null, null, null];
  for (const num of array) {
    update(largest, num);
  }
  return largest;
}

function update(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(ar, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      ar[i] = num;
    } else {
      ar[i] = ar[i + 1];
    }
  }
}

function findThreeLargestNumbers1(array) {
  debugger;
  const largestThree = [null, null, null];
  for (const num of array) {
    compareVals(largestThree, num);
  }
  return largestThree;
}

function compareVals(largestThree, num) {
  if (num > largestThree[2] || largestThree[2] === null) {
    shiftVals(num, largestThree, 2);
  } else if (num > largestThree[1] || largestThree === null) {
    shiftVals(num, largestThree, 1);
  } else if (num > largestThree[0] || largestThree === null) {
    shiftVals(num, largestThree, 0);
  }
}
//need current num, index to switch, and array
function shiftVals(num, array, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];
  for (const num of array) {
    compareNums(num, threeLargest);
  }
  return threeLargest;
}

function compareNums(num, ar) {
  if (num > ar[2] || ar[2] === null) {
    shift(num, ar, 2);
  } else if (num > ar[1] || ar[1] === null) {
    shift(num, ar, 1);
  } else if (num > ar[0] || ar[0] === null) {
    shift(num, ar, 0);
  }
}

function shift(num, ar, idx) {
  for (let i = 0; i <= idx; i++) {
    if (idx === i) {
      ar[i] = num;
    } else {
      ar[i] = ar[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers1([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])
);
