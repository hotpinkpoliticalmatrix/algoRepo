/* You are attempting to find the index of the first appearance of one string 
(the needle) inside of another (the haystack). You can think of the problem as 
looking for a particular substring inside another string and returning the starting 
index of that substring.*/

const indexOf = (sub, str) => {
  if (needle.length > haystack.length) return -1;

  const length = sub.length;
  for (let i = 0; i < str.length - length + 1; i++) {
    const subStr = str.slice(i, i + length);
    if (subStr === sub) return i;
  }
  return -1;
};

console.log(indexOf("or", "hello world")); // should return 7 because the string "or" can be found in the string "hello world" starting at index 7
console.log(indexOf("oox", "ooboxoooxo")); // should return 6
console.log(indexOf("howdy", "hello world")); // should return -1
console.log(indexOf("neddle", "neddle")); // should return 0 (the needle and haystack can potentially be the same string!)
console.log(indexOf("hello world", "or")); // should return -1 (notice how the needle is longer than the haystack)
