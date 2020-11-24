optTeam = (teamAr) => {
  let combos = [];
  let maxScore = 0;
  let members = {};
  teamAr.forEach((person) => {
    let name = person.name;
    members[name] = person.s + person.r;
  });
};

console.log(
  optTeam([
    { name: "a", s: 4, r: 5 },
    { name: "b", s: 6, r: 4 },
    { name: "c", s: 9, r: 7 },
    { name: "d", s: 2, r: 8 },
    { name: "e", s: 3, r: 5 },
  ])
); //[c, b, d]
