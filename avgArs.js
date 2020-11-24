function meanGroups(a) {
  let results = {};
  for (let i = 0; i < a.length; i++) {
    let curAr = a[i];
    let avg = curAr.reduce((a, b) => a + b) / curAr.length;
    !results[avg] ? (results[avg] = [i]) : results[avg].push(i);
  }

  let newAr = [];
  for (let key in results) {
    newAr.push(results[key].sort((a, b) => a - b));
  }
  newAr = newAr.sort((a, b) => a[0] - b[0]);
  return newAr;
}

let a = [
  [3, 3, 4, 2], //3
  [4, 4], //4
  [4, 0, 3, 3], //2.5
  [2, 3], //2.5
  [3, 3, 3], //3
];

console.log(meanGroups(a));
