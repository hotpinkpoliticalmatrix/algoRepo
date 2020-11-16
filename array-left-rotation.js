function rotLeft(a, d) {
  // const back = a.splice(0, d);
  return a.concat(a.splice(0, d));
}

console.log(rotLeft([1, 2, 3, 4, 5], 4)); //5,1,2,3,4

console.log(
  rotLeft(
    [
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
    ],
    10
  )
);
