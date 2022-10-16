const {
  NotImplementedError
} = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */




class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    console.log(`tree has ${data}: `, searchWithin(this.rootNode, data));
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      } 
    }
  }

  find( data ) {
    return findNode(this.rootNode, data)
    function findNode(node, data){
      if (!node){
        return null;
      }

      if (node.data === data){
        return node;
      }

      if(data < node.data){
        return findNode(node.left, data)
      }

      if (data > node.data){
        return findNode(node.right, data)
      }
    }
  }

  remove(data) {
    return removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        } 

        if (!node.left) {
          node = node.right;
          return node;
        } 

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minOfRight = node.right;

        while (minOfRight.left) {
          minOfRight = minOfRight.left;
        }

        node.data = minOfRight.data;
        node.right = removeNode(node.right, minOfRight.data)
       return node;
      }
    }
  }

  min() {
      if (!this.rootNode){
        return;
      }

      let node = this.rootNode;
      while(node.left){
        node = node.left;
      }
      return node.data;
  }

  max() {
    if (!this.rootNode){
      return;
    }

    let node = this.rootNode;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
console.log(tree.find(14))
/* tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1); */

//console.log(JSON.stringify(tree))
/* 

tree.has(14); //false
tree.has(8); // false
tree.has(9); //false
tree.has(2); // true
tree.has(6); // true
tree.has(128); //true
tree.has(31); //true;
tree.has(54); //true
tree.has(1); // true */

/* tree.remove(14);
console.log(tree) */
//console.log(JSON.stringify(tree))

/* 
tree.remove(8);
tree.remove(9);
tree.has(14); //false
tree.has(8); // false
tree.has(9); //false
tree.has(2); // true
tree.has(6); // true
tree.has(128); //true
tree.has(31); //true;
tree.has(54); //true
tree.has(1); // true
 */

module.exports = {
  BinarySearchTree
};