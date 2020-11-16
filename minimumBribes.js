//counter for total bribes
// count steps closer to 1 -- not farther than
// function minimumBribes(q) {
//   debugger;
//   let tooChaotic = false;
//   let totalBribes = 0;
//   q.forEach((start, i) => {
//     let curr = i + 1;
//     let diff = start - curr;
//     if (diff > 2) tooChaotic = true;
//     else if (diff > 0) {
//       totalBribes += diff;
//     }
//   });
//   return tooChaotic ? "Too chaotic" : totalBribes;
// }

function minimumBribes(q) {
  let totalBribes = 0;
  let expectedFirst = 1;
  let expectedSecond = 2;
  let expectedThird = 3;

  for (let i = 0; i < q.length; i++) {
    if (q[i] === expectedFirst) {
      expectedFirst = expectedSecond;
      expectedSecond = expectedThird;
      expectedThird++;
    } else if (q[i] === expectedSecond) {
      totalBribes++;
      expectedSecond = expectedThird;
      expectedThird++;
    } else if (q[i] === expectedThird) {
      totalBribes += 2;
      expectedThird++;
    } else {
      console.log("Too chaotic");
      return;
    }
  }
  console.log(totalBribes);
  return;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); //7

// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])); //too chaotic

// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])); //4
