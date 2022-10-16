const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

/* 
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const list = convertArrayToList([3, 1, 2, 3, 4, 5]); */


function removeKFromList(l, k) {

  function convertToArray(list) {
    arr.push(list.value);
    if (list.next) {
      convertToArray(list.next)
    }
  }

  function indexOf(element) {
    let current = l;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }
    return -1;
  }

  function removeAt(position) {
    if (position < 0 || position >= l.length) {
      return null;
    }

    let current = l;

    if (position === 0) {
      l = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    this.length--;
    console.log(l)
    return current.value;
  }

  function remove(element) {
    removeAt(indexOf(element))
  }

  
  let arr = [];
  convertToArray(l);
  
  
  if (!arr.includes(k)) {
    return l;
  } else {
    remove(k);
    return removeKFromList(l, k);
  }
}


module.exports = {
  removeKFromList
};