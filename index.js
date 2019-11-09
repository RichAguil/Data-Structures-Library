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

class HashTable {
    
  constructor() {
      this.bucket = new Array(8);
      this.entries = 0;
      this.loadFactor = this.entries/this.bucket.length;
  }
  
  hashFunction(key, bucket) {
      var hashValue = 0;
          
      for (var i = 0; i < key.length; i++) {
          
          hashValue = (hashValue + key.charCodeAt(0)) % bucket.length;
          
      }
      return hashValue;
  } 
  
  insert(key, value) {
      var data = {};
      data[key] = value;
      var newSize = this.bucket.length;
      
      if (key.length == 0) {
          console.log('No key was specified')
          return 0;
      }
      
      if (this.loadFactor > 0.67) {
          this.bucket = this.resizeUtility(newSize);
      }
      
      var increment = 0;
      var index = this.hashFunction(key, this.bucket);
      
      if (this.bucket[index] == undefined) {
          this.bucket[index] = data;
          this.entries++;
      } else {
          while (this.bucket[index]) {  //Linear probing algorithm to resolve collisions
              index = (this.hashFunction(key,this.bucket) + increment) % this.bucket.length;
              increment++;
          }
          
          this.bucket[index] = data;
          this.entries++;
      }
      this.loadFactor = this.entries/this.bucket.length;
  }
  
  resizeUtility(size) { //Utility function
      var tempTable = new HashTable(); //Create temporary table to store rehashed indices
      var prime = false;
      var newSize = size*2;
      var tempObjectKey;
      var tempObjectValue;
      
      while (prime == false) { //Resize hash table to a prime number
          if (newSize%2 == 0 || newSize%3 == 0 || newSize%5 == 0 || newSize%7 == 0 || newSize%11 == 0) {
              newSize++;
          } else {
              prime = true;
          }
      }
      tempTable.bucket.length = newSize;
      
      for (var i = 0; i < this.bucket.length; i++) { //Retrieving objects from old hash table and rehashing them
          if (this.bucket[i] !== undefined) {
              tempObjectKey = Object.keys(this.bucket[i])[0];
              tempObjectValue = this.bucket[i][tempObjectKey];
              tempTable.insert(tempObjectKey, tempObjectValue);
          }
      }
      this.bucket.length = newSize;
      return tempTable.bucket;
  }
  
  searchUtility(key) { //Utility functon
      
      var index = this.hashFunction(key, this.bucket);
      var increment = 0;
      
      if (this.bucket[index] == undefined) {
          console.log('This key does not exist');
          return 0;
      } else if (this.bucket[index].hasOwnProperty(key)) {
          return index;
      } else {
          while (this.bucket[index] !== undefined) { //If the hashed index is filled, use linear probing to find key
              increment++;
              index = (this.hashFunction(key,this.bucket) + increment) % this.bucket.length;
              if (this.bucket[index].hasOwnProperty(key)) {
                  return index;
              }
          }
          console.log('This key does not exist');
          return 0;
      }
  }
  
  removeAt(index) {
      
      delete this.bucket[index];
      this.entries--;
      this.loadFactor = this.entries/this.bucket.length;

      
  }
  
  removeKey(key) {
      
      var removeIndex = this.searchUtility(key);
      delete this.bucket[removeIndex];
      this.entries--;
      this.loadFactor = this.entries/this.bucket.length;
  }
  
  revealTable () {
      console.log(this);
  }
  
  findIndex(key) {
      console.log('This key is at index', this.searchUtility(key));
      
  }
  
  revealInfo(element) {
      if (typeof element == "string") {
          
          var index = this.searchUtility(element);
          console.log(this.bucket[index]);
          
      } else if (typeof element == "number") {
          
          console.log(this.bucket[element]);
          
      } else {
          console.log('Element does not exist!')
          return 0;
      }
  }
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
    SinglyLinkedList: SinglyLinkedList,
    BinarySearchTree: BinarySearchTree,
    HashTable: HashTable
}