class Stack {

    constructor () {
      this.elementStack = [];
    }
  
    pop() {
      var lastValue = this.elementStack[this.elementStack.length - 1];
      this.elementStack.length--;
      return lastValue;
    }
  
    push (data) {
      this.elementStack[this.elementStack.length] = data;
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
      this.elementQueue[this.elementQueue] = data;
    }
  
    dequeue() {
      var firstValue;
      var tempArray = [];
      if (this.elementQueue == 0) {
        console.log('Queue is empty!');
        return 0;
      } else {
        firstValue = this.elementQueue[0];

        for (var i = 1; i < this.elementQueue.length;i++) {
          tempArray[i-1] = this.elementQueue[i];
        }

        this.elementQueue.length = 0;

        for (var i = 0; i < tempArray.length; i++) {
          this.elementQueue[i] = tempArray[i];
        }

        return firstValue;
      }
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

class BinarySearchTree {

    constructor() {
        this.root = null;
    }
    
    addNode (data) {
        var node = new BinaryTreeNode(data);
        var currentPointer = this.root;
        if (this.root == null) {
          this.root = node;
        } else {
          return traverseAndInsert(currentPointer, node);
        }
        
        function traverseAndInsert (currentPointer, node) {
    
            if (node.data < currentPointer.data) {
                if (currentPointer.left !== null) {
                    currentPointer = currentPointer.left;
                    return traverseAndInsert(currentPointer, node);
                } else {
                    currentPointer.left = node;
                }
            } else if (node.data > currentPointer.data) {
                if (currentPointer.right !== null) {
                    currentPointer = currentPointer.right;
                    return traverseAndInsert(currentPointer, node);
                } else {
                    currentPointer.right = node;
                }
            
            }
    
        }
        
    return 0;
    
    }
    
    isEmpty() {
      if (this.root == null) {
          return true;
      }
    }
    
    removeNode (data) {
    
        var currentPointer = this.root;
        var previousPointer = this.root;
        
        function traverseAndRemove(data, currentPointer, previousPointer) {

            if (currentPointer == null) {
                console.log('Tree is empty!');
                return 0;
            } else if (data < currentPointer.data) {
              if (currentPointer.left == null) {
                console.log("Data does not exist!");
                return 0;
              }
                previousPointer = currentPointer;
                currentPointer = currentPointer.left;
                return traverseAndRemove(data, currentPointer, previousPointer);
            } else if (data > currentPointer.data) {
              if (currentPointer.right == null) {
                console.log("Data does not exist!");
                return 0;
              }
                previousPointer = currentPointer;
                currentPointer = currentPointer.right;
                return traverseAndRemove(data, currentPointer, previousPointer);
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
                    minNode = findMin(currentPointer.right);
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
                
                function findMin(node) {
                    if (node.left !== null) {
                        node = node.left;
                        return findMin(node);
                    } else {
                        return node;
                    }
                }
            }
      
        }
        
        return traverseAndRemove(data, currentPointer, previousPointer);
    
    }
  

    findDepth(data) {
        var level = 1;
        var currentPointer = this.root;
        if (currentPointer.data == data) {
            return level;
        } else {
            return locateNode(data, currentPointer, level);
        }
        
        function locateNode(data, currentPointer, level) {
            if (data > currentPointer.data && currentPointer.right !== null) {
                level++;
                currentPointer = currentPointer.right;
                return locateNode(data, currentPointer, level);
            } else if (data < currentPointer.data && currentPointer.left !== null) {
                level++;
                currentPointer = currentPointer.left;
                return locateNode(data, currentPointer, level);
            }
            console.log('The node containing the element of', data, 'is at level', level);
            return level;
        }
        
    }

}

module.exports = {
    Stack: Stack,
    Queue: Queue,
    SinglyLinkedList: SinglyLinkedList,
    BinarySearchTree: BinarySearchTree
}