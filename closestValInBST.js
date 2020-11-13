class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let BST1 = {
  id: "10",
  left: {
    id: "5",
    left: {
      id: "2",
      left: { id: "1", left: null, right: null, value: 1 },
      right: null,
      value: 2,
    },
    right: { id: "5-2", left: null, right: null, value: 5 },
    value: 5,
  },
  right: {
    id: "15",
    left: {
      id: "13",
      left: null,
      right: { id: "14", left: null, right: null, value: 14 },
      value: 13,
    },
    right: { id: "22", left: null, right: null, value: 22 },
    value: 15,
  },
  value: 10,
};

// const helper = (BST, target, closest) => {
//   debugger;
//   const dif = Math.abs(target - closest);
//   if (target > BST.value) {
//     if (BST.right) {
//       if (Math.abs(target - BST.right.value) < dif) {
//         closest = BST.right.value;
//       }
//       helper(BST.right, target, closest);
//     } else {
//       return closest;
//     }
//   } else {
//     if (BST.left) {
//       if (Math.abs(target - BST.left.value) < dif) closest = BST.left.value;
//       helper(BST.left, target, closest);
//     } else {
//       return closest;
//     }
//   }
// };

// const findClosestValueInBst = (BST, target) => {
//   return helper(BST, target, BST.value);
// };

// //ITERATIVE APPROACH
function findClosestValueInBst1(tree, target) {
  debugger;
  /*Closest is initialized with the value of the root of the tree that's passed
  in as the function's argument, and currentNode is initialized with the root node.*/
  let closest = tree.value;
  let currentNode = tree;

  /*Using a while loop, we traverse the tree, setting the condition that if currentNode
  is a valid node (ie, not null), we continue. */
  while (currentNode !== null) {
    debugger;
    if (currentNode.value === target) return currentNode.value; //return if value === target

    /*check whether the absolute value of the difference between currentNode and the target
    is less than the difference between the closest and the target. If the former is less,
    we reassign closest to currentNode.value.  */
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    //traverse the tree based on the value of the target relative to the current node's value
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  /*When the while loop reaches a null node, the loop is closed, and we return the node value
  that is closest to the target. */
  return closest;
}

//RECURSIVE APPROACH

/*use a helper function in order to preserve the value of the node closest to the target.
The helper function is passed three arguments - the tree (aka the current node), the target
value, and the value of the node closest to the target.  */

function findClosestValueInBst2(tree, target) {
  debugger;
  return helper(tree, target, tree.value);
}
/*The first time the helper function is invoked, we will pass it tree.value as closest as
the default.*/

function helper(tree, target, closest) {
  /*Inside the helper function, we declare a base case - if the tree passed to helper is null,
  we know we've traversed through all the relevant nodes and found the closest value, so we
  return closest and end the function call. */
  if (tree === null) return closest;

  /* check whether the absolute value of the difference between our current node (the tree
    passed as the argument) and the target is less than the difference between closest and
    the target. If the former is less, we reassign closest to tree.value. */
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  //Traverse the tree and conditionally call the recursive helper function on the next node
  if (target < tree.value) {
    return helper(tree.left, target, closest);
  } else if (target > tree.value) {
    return helper(tree.right, target, closest);
  } else {
    //here, we know target is equal to tree.value
    return closest;
  }
}

function findClosestValueInBst(tree, target) {
  debugger;
  let currentNode = tree;
  let closest = tree.value;
  while (currentNode !== null) {
    if (target < currentNode.value) {
      if (currentNode.left.value) {
        if (
          Math.abs(currentNode.left.value - target) < Math.abs(target - closest)
        ) {
          closest = currentNode.left.value;
        }
      }
      currentNode = currentNode.left;
    } else {
      if (currentNode.right.value) {
        if (
          Math.abs(currentNode.right.value - target) <
          Math.abs(target - closest)
        )
          closest = currentNode.right.value;
      }
      currentNode = currentNode.right;
    }
  }
  return closest;
}

console.log(findClosestValueInBst(BST1, 12));
