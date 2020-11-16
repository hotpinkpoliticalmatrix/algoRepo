function checkMagazine(magazine, note) {
  const hash = {};
  magazine.forEach((word) => {
    if (!hash[word]) hash[word] = 1;
    else hash[word]++;
  });

  for (let i = 0; i < note.length; i++) {
    let currentWord = note[i];
    if (!hash[currentWord]) {
      console.log("No");
      return;
    } else if (hash[currentWord]) {
      hash[currentWord]--;
    }
  }
  console.log("Yes");
  return;
}

console.log(
  checkMagazine(
    ["give", "me", "one", "grand", "today", "night"],
    ["give", "one", "grand", "today"]
  )
); //yes
console.log(
  checkMagazine(
    ["two", "times", "three", "is", "not", "four"],
    ["two", "times", "two", "is", "four"]
  )
); //no
console.log(
  checkMagazine(
    ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
    ["ive", "got", "some", "coconuts"]
  )
); //no
