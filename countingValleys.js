/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

//all hikes start at 0
//loop through the path, adding or decrementing the height of the hiker based on Us or Ds
//counter for number of valleys
//counter for current point
//any time current point dips below 0, we add 1 valley once it returns to sea level
//return the valley counter

function countingValleys(steps, path) {
  let valleys = 0;
  let currPoint = 0;
  let isValley = false;
  for (let i = 0; i < path.length; i++) {
    if (currPoint < 0) {
      isValley = true;
    }

    let direction = path[i];
    if (direction === "U") currPoint++;
    else currPoint--;

    if (isValley && currPoint >= 0) {
      valleys++;
      isValley = false;
    }
  }
  return valleys;
}
