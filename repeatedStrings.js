function repeatedString(s, n) {
  const numA = s.split("").filter((letter) => letter === "a").length;
  const repeats = Math.floor(n / s.length);
  const cutoff = n % s.length;
  const lastRepeat = s
    .slice(0, cutoff)
    .split("")
    .filter((letter) => letter === "a").length;
  return numA * repeats + lastRepeat;
}

console.log(
  repeatedString(
    "udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps",
    872514961806
  )
); // 69801196944

console.log(repeatedString("x", 970770)); //0
