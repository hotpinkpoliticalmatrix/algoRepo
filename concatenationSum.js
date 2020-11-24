function concatenationsSum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    let subSum = a.reduce((accumulator, curVal, j) => {
      accumulator += parseInt(`${a[i]}${a[j]}`, 10);
      return accumulator;
    }, 0);
    sum += subSum;
  }
  return sum;
}

console.log(concatenationsSum([10, 2, 14, 3])); //1344
//1010
//102
//210
//22
