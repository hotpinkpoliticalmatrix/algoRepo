function borderSort(matrix) {
  debugger;
  let sortedBorders = [];
  while (matrix.length) {
    let borderAr = [];
    for (let i = 0; i < matrix.length; i++) {
      let curRow = matrix[i].slice();

      for (let j = 0; j < curRow.length; j++) {
        if (i === 0) {
          borderAr.push(matrix.slice(j, 1)[0]);
          curRow.splice(j, 1)[0];
        } else if (i === matrix.length - 1) {
          borderAr.push(curRow.splice(j, 1)[0]);
        } else if (j === 0 || j === curRow.length - 1) {
          borderAr.push(matrix[i].splice(j, 1)[0]);
        }
      }
      if (!curRow.length) matrix.splice(i, 1);
    }
    sortedBorders.push(borderAr.sort((a, b) => a - b));
  }
}

borderSort([
  [9, 7, 4, 5],
  [1, 6, 2, -6],
  [12, 20, 2, 0],
  [-5, -6, 7, -2],
]);
