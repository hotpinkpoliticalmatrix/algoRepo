function maxEvents(arrival, duration) {
  if (arrival.length < 2) return arrival.length;
  const arrivals = [];
  arrival.forEach((event, i) => arrivals.push([event, duration[i]]));
  arrivals.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let mostEvents = 0;
  console.log(arrivals);
  for (let i = 0; i < arrivals.length; i++) {
    let nextAvail = arrivals[i][0] + arrivals[i][1];
    let combos = [arrivals[i]];
    for (let j = i + 1; j < arrivals.length; j++) {
      if (arrivals[j][0] >= nextAvail) {
        combos.push(arrivals[j]);
        nextAvail = arrivals[j][0] + arrivals[j][1];
      }
    }
    if (combos.length > mostEvents) mostEvents = combos.length;
  }
  return mostEvents;
}

console.log(maxEvents([1, 1, 1, 1, 4], [10, 3, 6, 4, 2])); //2
// function subsetSum(target, arr) {
//   let sums = [0];
//   for (let i = 0; i < arr.length; i++) {
//     let sumsCopy = [...sums]; // create a new array to iterate through; iterating through the array that we're mutating will lead to some weird behavior
//     for (let j = 0; j < sumsCopy.length; j++) {
//       let newSum = sumsCopy[j] + arr[i];
//       if (newSum === target) return true;
//       else if (newSum < target) sums.push(newSum);
//     }
//   }
//   return false;
// }

console.log(maxEvents([1, 3, 5], [2, 2, 2])); //3
console.log(
  maxEvents(
    [
      978,
      409,
      229,
      934,
      299,
      982,
      636,
      14,
      866,
      815,
      64,
      537,
      426,
      670,
      116,
      95,
      630,
    ],
    [
      502,
      518,
      196,
      106,
      405,
      452,
      299,
      189,
      124,
      506,
      883,
      753,
      567,
      717,
      338,
      439,
      145,
    ]
  )
); //4

// if (arrival.length < 2) return arrival.length;
// const arrivals = [];
// arrival.forEach((event, i) => arrivals.push([event, duration[i]]));
// arrivals.sort((a, b) => a[1] - b[1]);
// let unique = new Set();
// for (let i = 0; i < arrivals.length; i++) {
//   for (let j = arrivals[i][0]; j <= arrivals[i][1]; j++) {
//     if (!unique.has(j)) {
//       unique.add(j);
//       break;
//     }
//   }
// }
// return unique.size;

function maxEvents2(arrival, duration) {
  if (arrival.length < 2) return arrival.length;

  const arrivals = arrival
    // .map((event, i) => ([event, duration[i]]))
    // .sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    .map((event, i) => ({ event, duration: duration[i] }))
    .sort((a, b) => a.event + a.duration - (b.event + b.duration));
  let mostEvents = 0;
  for (let i = 0; i < arrivals.length; i++) {
    let nextAvail = arrivals[i][0] + arrivals[i][1];
    let combos = [arrivals[i]];
    for (let j = i + 1; j < arrivals.length; j++) {
      if (arrivals[j][0] >= nextAvail) {
        combos.push(arrivals[j]);
        nextAvail = arrivals[j][0] + arrivals[j][1];
      }
    }
    if (combos.length > mostEvents) mostEvents = combos.length;
  }
  return mostEvents;
}
