/*
 * Complete the 'droppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY requestTime as parameter.
 */

/*
returns the total number of dropped requests
number of transactions in any second cannot be 3 ==> [1, 1, 1, 1] would drop
number of transactions in any given 10 secons cannot exceed 20 
number of transactions in any minute cannot exceed 60

for loop - 
if the ten second 
*/
function droppedRequests(requestTime) {
  debugger;
  if (!requestTime.length) return 0;
  // Write your code here
  let counter = 0;
  let singleSecond = [requestTime[0]];
  let tenSecond = [requestTime[0]];
  let minute = [requestTime[0]];
  for (let i = 1; i < requestTime.length; i++) {
    let indCount = 0;
    let currReq = requestTime[i];
    if (currReq !== singleSecond[0]) singleSecond = [currReq];
    else {
      singleSecond.push(currReq);
      if (singleSecond.length > 3) indCount++;
    }

    while (currReq - tenSecond[0] >= 10) {
      tenSecond.shift();
    }
    tenSecond.push(currReq);
    if (tenSecond.length > 20) indCount++;

    while (currReq - minute[0] >= 60) {
      minute.shift();
    }
    minute.push(currReq);
    if (minute.length >= 60) indCount++;
    //increment the counter based on a truthy value for the individual request made
    if (indCount) counter++;
  }
  return counter;
}

const ar = [
  100,
  100,
  101,
  102,
  102,
  103,
  103,
  105,
  105,
  106,
  106,
  106,
  107,
  107,
  109,
  109,
  109,
  109,
  110,
  110,
  110,
  111,
  111,
  112,
  114,
  115,
  115,
  116,
  116,
  116,
  117,
  118,
  118,
  120,
  120,
  121,
  121,
  122,
  122,
  123,
  123,
  124,
  124,
  125,
  127,
  128,
  128,
  129,
  131,
  133,
  134,
  135,
  135,
  135,
  136,
  137,
  137,
  137,
  138,
  138,
  140,
  140,
  140,
  141,
  141,
  143,
  144,
  145,
  146,
  149,
  149,
  149,
  149,
  149,
  151,
  151,
  152,
  152,
  154,
  154,
  155,
  156,
  156,
  157,
  158,
  158,
  159,
  159,
  160,
  160,
  160,
  162,
  162,
  162,
  164,
  166,
  167,
  167,
  169,
  169,
  172,
  172,
  172,
  172,
  174,
  175,
  175,
  175,
  176,
  177,
  177,
  177,
  179,
  179,
  180,
  180,
  180,
  180,
  181,
  181,
  181,
  182,
  182,
  183,
  183,
  183,
  184,
  184,
  187,
  187,
  188,
  188,
  188,
  188,
  189,
  189,
  189,
  190,
  191,
  191,
  192,
  192,
  193,
  195,
  195,
  195,
  195,
  197,
  198,
  198,
  199,
  199,
  200,
  200,
  200,
];
droppedRequests(ar);
