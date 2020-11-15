function sockMerchant(n, ar) {
  const pairs = {};
  let numPairs = 0;

  ar.forEach((sock) => {
    if (!pairs[sock]) pairs[sock] = 1;
    else pairs[sock]++;
  });

  for (let key in pairs) {
    numPairs += Math.floor(pairs[key] / 2);
  }

  return numPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
