function hasBalancedBrackets(str) {
  debugger;
  //Initialize the stack where we will push open brackets
  let openBracketStack = [];

  /* Create a mini bracket library so we can easily check 
  if a bracket is an opening or closing bracket.*/
  const openBracket = {
    "[": true,
    "(": true,
    "{": true,
  };
  const closeBracket = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    let el = str[i];

    // handle an open bracket
    if (openBracket[el]) {
      openBracketStack.push(el);
    }

    // handle a closed bracket
    if (closeBracket[el]) {
      // if there are no open brackets in the stack, the
      //brackets are not balanced
      if (openBracketStack.length === 0) return false;
      /* now check to see if this closed bracket is a match 
      to the last open one if it is a match, great! Pop off 
      that open bracket.*/ 
      else if (
        closeBracket[el] === openBracketStack[openBracketStack.length - 1]
      ) {
        openBracketStack.pop();
      }

      // if it's not a match, we know that our brackets aren't
      // balanced :(
      else return false;
    }
  }

  // If we reach the end of the string and our openBracketStack is empty,
  // then we know the input string is balanced
  return !openBracketStack.length;
}

console.log(hasBalancedBrackets("[]({}")); // returns false

console.log(hasBalancedBrackets("({[]})")); // returns true

console.log(hasBalancedBrackets("({)}")); // returns false

console.log(hasBalancedBrackets("({}){[]()}")); // returns true

console.log(
  hasBalancedBrackets("there (may [be] text){between [y]o[u]r (brackets)}")
);
// returns true

// const bracketPattern = /[[\](){}]/g;
// const bracketPairs = {
//   //keeps track of the possible bracket pairings
//   "[": "]",
//   "(": ")",
//   "{": "}",
// };
// function hasBalancedBrackets(inputString) {
//   const inputBrackets = inputString.match(bracketPattern); // returns an array of all the brackets in the input
//   const brackets = [];
//   if (!inputString.length || !inputBrackets.length) {
//     return true; // empty input or no brackets i.e. 'balanced' (throwing an error is fine also)
//   }
//   inputBrackets.forEach(function (bracket) {
//     const lastBracket = brackets[brackets.length - 1];
//     if (bracketPairs[lastBracket] === bracket) {
//       // the current bracket and the last bracket are a pair
//       brackets.pop(); // we found a pair so remove the opening bracket from the array and move on
//     } else {
//       brackets.push(bracket);
//     }
//   });
//   return brackets.length === 0; // if the brackets were balanced then we should not have any brackets in the array
// }
