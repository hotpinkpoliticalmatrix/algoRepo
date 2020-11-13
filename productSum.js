const productSum = (array, depth = 1) => {
  debugger;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    Array.isArray(el)
      ? (sum += productSum(el, depth + 1))
      : (sum += depth * el);
  }
  return sum;
};

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
