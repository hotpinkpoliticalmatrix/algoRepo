function ListNode(val) {
  this.val = val;
  this.next = null;
}

function merge2Lists(list1, list2) {
  let mergedList = new ListNode(0);
  let curr = mergedList;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  list1 ? (curr.next = list1) : (curr.next = list2);
  return mergedList.next;
}

function mergeNLists(lists) {
  if (lists.length === 0) {
    return null;
  }
  let interval = 1;
  while (lists.length > interval) {
    debugger;
    let idx = 0;
    while (idx + interval < lists.length) {
      lists[idx] = merge2Lists(lists[idx], lists[idx + interval]);
      idx += interval * 2;
    }
    interval *= 2;
  }
  return lists[0];
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

let l4 = {
  val: -7,
  next: {
    val: 3,
    next: {
      val: 12,
      next: {
        val: 30,
      },
    },
  },
};

console.log(mergeNLists([l1, l2, l3, l4]));
