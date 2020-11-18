function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node("a");
let b = node("b");
let c = node("c");
let d = node("d");
let e = node("e");
let f = node("f");

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

//track depth of currentNode
//traverse the tree from left to right, keeping track of the current Node's depth
//if current node's depth is greater than deepest node, reassign value

const findDeepest = (node) => {
  let deepestNode = node;
  let deepestLevel = 0;
  const helper = (node, curDepth) => {
    if (node) {
      if (curDepth > deepestLevel) {
        deepestLevel = curDepth;
        deepestNode = node;
      }
      if (node.left) {
        helper(node.left, curDepth + 1);
      }
      if (node.right) {
        helper(node.right, curDepth + 1);
      }
    }
  };

  helper(node, 0);
  return deepestNode;
};

const findDeepestBFS = (node) => {
  debugger;
  // we use a queue to iterate over the tree
  let queue = [node];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  // when we exit the while loop, it means we've seen every node, in breadth-first order
  //current will be the last node we saw, which will necessarily be the deepest node in the tree
  return current;
};

console.log(findDeepestBFS(a));
