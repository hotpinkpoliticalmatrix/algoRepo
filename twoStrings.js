function twoStrings(s1, s2) {
  debugger;
  const hash = {};
  let longest;
  let shortest;
  if (s1.length > s2.length) {
    longest = s1;
    shortest = s2;
  } else {
    longest = s2;
    shortest = s1;
  }

  for (let i = 0; i < longest.length; i++) {
    const currentEl = longest[i];
    hash[currentEl] = true;
  }
  for (let i = 0; i < shortest.length; i++) {
    const currentEl = shortest[i];
    if (hash[currentEl]) return "YES";
  }
  return "NO";
}

console.log(twoStrings("hello", "world"));
