// function sherlockAndAnagrams(s) {
//   debugger;
//   if (s.length < 2) return 0;

//   const hash = {};
//   let combos = 0;

//   let startIdx = 0;
//   let endIdx = 1;

//   while (startIdx < s.length) {
//     let permutation = s.slice(startIdx, endIdx).split("").sort().join("");

//     if (hash[permutation]) {
//       hash[permutation] += 1;
//     } else {
//       hash[permutation] = 1;
//     }
//     endIdx++;
//     if (endIdx === s.length + 1) {
//       startIdx++;
//       endIdx = startIdx + 1;
//     }
//   }
//   debugger;
//   // console.log(hash);
//   const vals = Object.values(hash);
//   vals.forEach((val) => {
//     if (val % 2 === 0) {
//       combos += val / 2;
//     }
//   });
//   return combos;
// }

function sherlockAndAnagrams(s) {
  debugger;
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    let found = {};

    for (let j = 0; j + i <= s.length; j++) {
      let res = s.substr(j, i);
      let substr = res.split("").sort().join("");
      if (found[substr]) {
        count += found[substr];
        found[substr]++;
      } else {
        found[substr] = 1;
      }
    }
  }

  return count;
}

console.log(sherlockAndAnagrams("abba")); //4
console.log(sherlockAndAnagrams("abcd")); //0
console.log(sherlockAndAnagrams("ifailuhkqq")); //3
console.log(sherlockAndAnagrams("kkkk")); //10
console.log(sherlockAndAnagrams("cdcd")); //5
