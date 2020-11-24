function almostIncreasingSequence(sequence) {
  let removed = 0;
  let valToCompare = sequence[0];
  for (let i = 1; i < sequence.length; i++) {
    if (valToCompare >= sequence[i]) {
      removed++;
      if (sequence[i] > sequence[i - 2] || sequence[i] > 0)
        valToCompare = sequence[i];
    } else {
      valToCompare = sequence[i];
    }
  }
  if (removed > 1) return false;
  else return true;
}

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));

function commonCharacterCount(s1, s2) {
  debugger;
  let lookup = {};
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    lookup[s1[i]] = "entered";
  }

  for (let i = 0; i < s2.length; i++) {
    if (lookup[s2[i]] === "entered") {
      count++;
      lookup[s2[i]] = "found";
    }
  }
  return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
