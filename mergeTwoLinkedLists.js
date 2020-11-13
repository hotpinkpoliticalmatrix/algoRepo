/*Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, 
respectively. The function should merge the lists in place (i.e., it shouldn't create a brand 
new list) and return the head of the merged list; the merged list should be in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in 
the list or to null if it's the tail of the list. */

/*node: {
  val: num, 
  next: nextNode
}

if next === null, we are at the tail.

compare value of one and two
if value of one is less than two, one is first, else two is first
check value of next node
if next's value is less than the greater of original two, original node comes first

*/
const merge = (one, two) => {
  let p1 = one;
  let p2 = two;
  let prev = null;
  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      prev = p2;
      p2 = p2.next;
    }
  }
};
