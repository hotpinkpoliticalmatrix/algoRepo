function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeNLists(lists) {
  debugger;
  let nodes = [];
  //iterate through the lists in the array
  for (let listsIdx = 0; listsIdx < lists.length; listsIdx++) {
    //grab current list
    let currentList = lists[listsIdx];
    //traverse through the current list - current list points to the head node
    while (currentList !== null) {
      //grab the value of the node and push into the nodes array
      nodes.push(currentList.val);
      //if there's a next node, reassign currentList to it's next node
      if (currentList.next) {
        currentList = currentList.next;
      } else {
        //break when there is no next node
        break;
      }
    }
  }
  //sort the node array
  debugger;
  nodes.sort((a, b) => a - b);

  /*create a new listNode with an arbitrary start value. We will ultimately be 
  returning its next value - namely the head node of our new list built from 
  the sorted nodes. We use the pointer currentNode to keep track of where we 
  are in the list.*/
  let mergedList = new ListNode(0); //{val: 0, next: null}
  let currentNode = mergedList;

  /*loop through the values in the nodes array, adding a new Node for each element
  and assigning it as the next node in the new list. After the next node is assigned,
  we move the pointer to the node we just added.*/
  for (let nodesIdx = 0; nodesIdx < nodes.length; nodesIdx++) {
    currentNode.next = new ListNode(nodes[nodesIdx]);
    currentNode = currentNode.next;
  }

  /*finally, return the new list, starting with the first element we added to it from 
  our sorted array*/
  debugger;
  return mergedList.next;
}

let l1 = {
  val: -3,
  next: {
    val: 7,
    next: {
      val: 9,
      next: {
        val: 11,
      },
    },
  },
};

let l2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 18,
      },
    },
  },
};

let l3 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 10,
      next: {
        val: 12,
      },
    },
  },
};

console.log(mergeNLists([l1, l2, l3]));
