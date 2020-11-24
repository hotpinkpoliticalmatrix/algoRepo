function rotateImage(a) {
  debugger;
  for (let i = 0; i < a.length; i++) {
    let row = a[i];
    for (let j = 0; j < row.length; j++) {
      let temp = a[j][row.length - 1];
      a[j][row.length - 1] = a[i][j];
      a[i][j] = temp;
    }
  }
  return a;
}

rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
