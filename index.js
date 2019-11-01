class Stack {

    constructor () {
      this.elementStack = [];
    }
  
    pop() {
      return this.elementStackArray.pop();
    }
  
    push (data) {
      this.elementStack.push(data);
    }
  
    peek () {
      if (this.elementStack.length == 0) {
        console.log("Stack is empty!");
        return false;
      } else {
        return this.elementStack[this.elementStack.length - 1];
      }
    }
  
    sizeOf() {
      return this.elementStack.length;
    }
  
    isEmpty() {
      if (this.elementStack.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  
    printStack() {
      console.log(this.elementStack);
    }
  
}

class Queue {

    constructor () {
      this.elementQueue = [];
    }
  
    enqueue (data) {
      this.elementQueue.push(data);
    }
  
    dequeue() {
      return this.elementQueue.shift();
    }
  
    front () {
      if (this.elementQueue.length !== 0) {
        return this.elementQueue[0];
      } else {
        return false;
      }
    }
  
    isEmpty() {
      if (this.elementQueue.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  
    sizeOf() {
      return this.elementQueue.length;
    }
  
}

class LinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
  
class SinglyLinkedList {
  
    constructor () {
  
      this.head = null;
      this.size = 0;
  
    }
  
    addNode(data) {
  
      var node = new LinkedListNode(data);
      var currentPointer = this.head;
  
      if (currentPointer == null) {
        this.head = node;
        this.size++;
      } else {
  
        while (currentPointer.next !== null) {
          currentPointer = currentPointer.next;
        }
  
        currentPointer.next = node;
        this.size++;
      }
  
    }
  
    sizeOf() {
      console.log(this.size);
    }
    
    isEmpty() {
        
        if (this.size == 0) {
            console.log(true);
        } else {
            console.log(false);
        }
        
    }
  
    removeNode(data) {
  
      var currentPointer = this.head;
      var previousPointer;
  
      if (this.size == 0) {
          
        console.log("Nothing to be removed!");
        return 0;
        
      } else if (this.size == 1) {
          
        this.head = null;
        this.size--;
        console.log("Root node has been removed");
        return 0;
        
      } else {
        
        while (currentPointer.data !== data) {
          previousPointer = currentPointer;
          currentPointer = currentPointer.next;
        }
  
        if (currentPointer.next == null) {
          currentPointer = null;
          this.size--;
        } else {
          previousPointer.next = currentPointer.next;
          currentPointer = null;
          this.size--;
        }
  
      }
  
    }
    
    insertNodeAt(data, index) {
        
        var node = new Node(data);
        var currentPointer = this.head;
        var previousPointer;
        var iteration = 0;
        
        while (iteration !== index) {
            
            previousPointer = currentPointer;
            currentPointer = currentPointer.next;
            iteration++;
            
        }
        
        if (currentPointer.next == null) {
            currentPointer.next = node;
            this.size++;
        } else {
            node.next = currentPointer
            previousPointer.next = node;
            this.size++;
        }
        
    }
    
    removeNodeAt(index) {
        
        var currentPointer = this.head;
        var previousPointer;
        var iteration = 0;
        
        while (iteration !== index) {
            
            previousPointer = currentPointer;
            currentPointer = currentPointer.next;
            iteration++;
            
        }
        
        if (currentPointer.next == null) {
            
            currentPointer = null;
            this.size++;
            
        } else {
            
            previousPointer.next = currentPointer.next;
            currentPointer = null;
            this.size++;
        }
        
    }
  
}

class BinaryTreeNode {

    constructor (data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
}
  
class BinaryTree {
  
      constructor() {
          this.root = null;
      }
      
      addNode (data) {
          var node = new BinaryTreeNode(data);
          var currentPointer = this.root;
          if (this.root == null) {
            this.root = node;
          } else {
            return this.traverseAndInsert(currentPointer, node);
          }
      return 0;
      }
      
      traverseAndInsert (currentPointer, node) {
      
          if (node.data < currentPointer.data) {
              if (currentPointer.left !== null) {
                  currentPointer = currentPointer.left;
                  return this.traverseAndInsert(currentPointer, node);
              } else {
                  currentPointer.left = node;
              }
          } else if (node.data > currentPointer.data) {
              if (currentPointer.right !== null) {
                  currentPointer = currentPointer.right;
                  return this.traverseAndInsert(currentPointer, node);
              } else {
                  currentPointer.right = node;
              }
          
          }
      
      }
      
      isEmpty() {
        if (this.root == null) {
            return true;
        }
      }
      
      removeNode (data) {
      
          var currentPointer = this.root;
          var previousPointer = this.root;
          return this.traverseAndRemove(data, currentPointer, previousPointer);
      
      }
    
      traverseAndRemove(data, currentPointer, previousPointer) {
  
          if (this.isEmpty()) {
              console.log('Tree is empty!');
              return 0;
          } else if (data < currentPointer.data) {
              previousPointer = currentPointer;
              currentPointer = currentPointer.left;
              return this.traverseAndRemove(data, currentPointer, previousPointer);
          } else if (data > currentPointer.data) {
              previousPointer = currentPointer;
              currentPointer = currentPointer.right;
              return this.traverseAndRemove(data, currentPointer, previousPointer);
          } else if (data == currentPointer.data) {
              if (currentPointer.left == null && currentPointer.right == null) {//No children
                  if (previousPointer.left.data == data) {
                      previousPointer.left = null;
                      return 0;
                  } else {
                      previousPointer.right = null;
                      return 0;
                  }
              } else if (currentPointer.left == null || currentPointer.right == null) {//One child
                  if (currentPointer.left == null && previousPointer.left.data == data) {
                      previousPointer.left = currentPointer.right;
                      return 0;
                  } else if (currentPointer.left == null && previousPointer.right.data == data) {
                      previousPointer.right = currentPointer.right;
                      return 0;
                  } else if (currentPointer.right == null && previousPointer.left.data == data) {
                      prevousPointer.left = currentPointer.right;
                  } else if (currentPointer.right == null && previousPointer.right.data == data) {
                      previousPointer.right = currentPointer.left;
                  }
              } else { //Two children
                  
                  var minNode;
                  minNode = this.findMin(currentPointer.right);
                  currentPointer.right.left = null;
                  minNode.left = currentPointer.left;
                  if (currentPointer.right.data !== minNode.data) {
                      minNode.right = currentPointer.right;
                  }
                  
                  if (previousPointer.left.data == data) {
                      previousPointer.left = minNode;
                      return 0;
                  } else {
                      previousPointer.right = minNode;
                      return 0;
                  }
              }
          }
        
      }
      
      findMin(node) {
          if (node.left !== null) {
              node = node.left;
              return this.findMin(node);
          } else {
              return node;
          }
      }
  
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
    SinglyLinkedList: SinglyLinkedList,
    BinaryTree: BinaryTree
}