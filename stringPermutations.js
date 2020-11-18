function stringPermutations(str) {
  var results = [];
  var letters = str.split("");
  results.push([letters.shift()]); //add first letter (as an array) to results
  while (letters.length) {
    var curLetter = letters.shift();
    var tmpResults = [];
    results.forEach(function (curResult) {
      for (var i = 0; i <= curResult.length; i++) {
        var tmp = curResult.slice(); //make copy so we can modify it
        //insert the letter at the current position
        tmp.splice(i, 0, curLetter);
        tmpResults.push(tmp);
      }
    });
    results = tmpResults; //overwrite the previous results
  }
  return results
    .map(function (letterArr) {
      return letterArr.join("");
    })
    .filter(function (el, index, self) {
      return self.indexOf(el) === index; //filter out non-unique words
    })
    .sort();
}

// stringPermutations("one");

// const stringPerm = (str) => {
//   let results = [];
//   const letters = str.split("");
//   results.push([letters.shift()]);
//   while (letters.length) {
//     let currentLetter = letters.shift();
//     const tmpResults = [];
//     results.forEach((result) => {
//       for (let i = 0; i <= result.length; i++) {
//         const tmp = result.slice();
//         tmp.splice(i, 0, currentLetter);
//         tmpResults.push(tmp);
//       }
//     });
//     results = tmpResults;
//   }
//   console.log(results.length);
// };

function sortStringPermutations(str) {
  debugger;
  if (str.length === 1) return [str]; // base case
  const all = [];
  // go through each character in the string
  let i = 0;
  while (i < str.length) {
    // get each individual character
    const letter = str[i];
    // get all the other characters surrounding it
    const otherChars = str.slice(0, i) + str.slice(i + 1);
    // compute all permutations of the *other* characters
    sortStringPermutations(otherChars).forEach((submpermut) => {
      // add the current letter to the front of each of these "sub-permutations"
      // include *that* into the full result set
      all.push(letter + submpermut);
    });
    // increment until we reach a new letter (to avoid duplicates in the result set)
    while (str[i] === letter) i++;
  }
  return all;
}
function sortedStringPermutations(str) {
  // first sort the characters in the string
  const sortedStr = str.split("").sort().join("");
  // then find the ordered permutations of that sorted string
  return sortStringPermutations(sortedStr);
}

console.log(sortStringPermutations("abc"));
