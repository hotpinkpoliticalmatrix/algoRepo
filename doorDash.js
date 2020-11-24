process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/*
- int start_time: when you plan to start your schedule
- int end_time: when you plan to end your schedule
- int d_starts[n]: the start times of each delivery[i]
- int d_ends[n]: the end times of each delivery[i]
- int d_pays[n]: the pay for each delivery[i]

start_time = 0
end_time = 10
d_starts = [2, 3, 5, 7, 8]
d_ends = [6, 5, 10, 9, 10]
d_pays = [5, 2, 4, 1, 4]

6
2 + 4 = 6


*/

//variable to store maximum pay
//current pay
//jobs start, following job needs to start after the first job ends
//check whether both the start time and end time

function addNumbers(startShift, endShift, startAr, endAr, payAr) {
  let maxPay = 0;
  let sorted = startAr.sort((a, b) => a - b);
  if (startShift > sorted[sorted.length - 1]) {
    return maxPay;
  } else {
    for (let i = 0; i < startAr.length; i++) {
      if (startAr[i] < startShift) continue;
      let possiblejobs = [];
      let currentPay = payAr[i]; //5
      let nextJob = endAr[i] + 1; //7
      for (let j = i + 1; i < startAr.length; j++) {
        let possibleNextJob = startAr[j];
        if (
          possibleNextJob < nextJob ||
          possibleNextJob < startShift ||
          endAr[j] > endShift
        )
          continue;
        else {
          currentPay += payAr[j];
          nextJob = endAr[j] + 1;
          currentPay += addNumbers(nextJob, endShift, startAr, endAr, payAr);
        }
      }
      if (currentPay > maxPay) maxPay = currentPay;
    }
  }
  return maxPay;
}

//helper function need to take i,

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());
  var start_time = 0;
  var end_time = 10;
  var d_starts = [2, 3, 5, 7, 8];
  var d_ends = [6, 5, 10, 9, 10];
  var d_pays = [5, 2, 4, 1, 4];

  var res = addNumbers(start_time, end_time, d_starts, d_ends, d_pays);
  console.log("The sum is " + res);
}




// For each delivery, we expect a Dasher to first pickup the order from a merchant and then drop off the order to a customer. However, a Dasher can be batched during the delivery process, meaning that they could have multiple pickup and drop off actions in their route. In this case, the pickup for each delivery has to occur before the respective drop off.

// Given a sequence of pickup and drop off actions, write a function to ensure the sequence is valid.

//Examples: 
// P1, D1 -> valid
// P1, P2, D1, D2 -> valid
// P1, D1, P2, D2 -> valid
// P2, D2, P1, D2 -> invalid
// P1, D2, P2, D1 -> invalid
// P1, D2 -> invalid
// P1, P2, D2 -> invalid
// P1, D1, P1, D1 -> invalid
// P1, P2, D2, D1 -> valid

// isValid(["P1", "D1"]) -> return true

const isValid = (ar) => {
    let hash = {}
    if (ar.length % 2 === 1) return false 

    for (let i = 0; i < ar.length; i++) {
        if (hash[ar[i]]) {
            return false
        } else {
            hash[ar[i]] = true
        }
    }
    
    let combos = {};
    let isComplete = true
    for (let i = 0; i < ar.length; i++) {
        if (ar[i][0] === "P") {
            combos[`D${ar[i][1]}`] = true 
            isComplete = false;
        } else {
            if (!combos[ar[i]]) {
                return false
            }
            isComplete = true
        }
    }
    if (isComplete) return true
    else return false
}

// console.log(isValid(["P1", "D1"])); 
// console.log(isValid(["P1", "P2", "D1", "D2"]));
// console.log(isValid(["P1", "D1", "P2", "D2"]));
// console.log(isValid(["P2", "D2", "P1", "D2"]));
// console.log(isValid(["P1", "D2", "P2", "D1"]));
// console.log(isValid(["P1", "D2"]));
// console.log(isValid(["P1", "P2", "D2"]));
// console.log(isValid(["P1", "D1", "P1", "D1"]));
// console.log(isValid(["P1", "P2", "D2", "D1"]));

// Given n deliveries, write a function that prints out all the valid sequences of routes.

const validRoutes = (ar) => {
    if (!isValid(ar)) return `not a valid route!`
    let results = [];
    results.push(ar.shift()) //"P1"
    while(ar.length) {
        let currentLetter = ar.shift();
        let temp = [];
        results.forEach((result) => {
            let temp = 
        })
    }
}

// Examples:
// N = 1 -> [p1, d1]
// N = 2 -> [p1, d1, p2, d2], [p1, p2, d1, d2], [p1, p2, d2, d1], [p2, d2, p1, d1], [p2, p1, d1, d2], [p2, p1, d2, d1]
// N = 3 -> [p1, p2, p3, d1, d2, d3], [p1, p3, p2, d1, d2, d3], []  ... (90 cases)
// N = 3 -> 90 routes should be printed out 
// N = 4 -> 2520 routes should be printed out

// validRoutes(1) should print out [p1, d1]



