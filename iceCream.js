function whatFlavors(cost, money) {
  debugger;
  let hash = {};
  for (let i = 0; i < cost.length; i++) {
    let current = cost[i];
    if (!hash[current]) {
      const diff = money - current;
      hash[diff] = i + 1;
    } else {
      const matchLocation = hash[current];
      console.log(`${matchLocation} ${i + 1}`);
      break;
    }
  }
}

// console.log(whatFlavors([1, 4, 5, 3, 2], 4)); // 1 4
console.log(whatFlavors([2, 2, 4, 3], 4)); // 1 2
console.log(whatFlavors([1, 2, 3, 5, 6], 5)); //2 3
console.log(whatFlavors([4, 3, 2, 5, 7], 8)); //2 4
console.log(whatFlavors([7, 2, 5, 4, 11], 12)); //1 3
