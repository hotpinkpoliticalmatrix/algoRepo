function jumpingOnClouds(c) {
  debugger;
  let jumps = 0;
  for (let i = 0; i < c.length - 1; i++) {
    let maxJump = c[i + 2];
    if (maxJump) {
      jumps++;
    } else {
      i++;
      jumps++;
    }
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
