You can see the package here:

https://www.npmjs.com/package/datastructuresnpm

# Data Structures Library

This is a library I created as a personal project, and as a convenience for myself and others. This library contains commonly used data structures such as:

1. Stacks
2. Queues
3. Singly Linked Lists
4. Doubly Linked Lists
5. Binary Search Trees
6. Hash Table

## Example

Below you will find an example of how to bring in the module, and begin using it.

```javascript
var dataStructures = require('datastructuresnpm');

var LL = new dataStructures.SinglyLinkedList();

LL.addNode(5);
LL.addNode(6);
LL.removeNode(6)

console.log(LL);
```

Below is how you can instantiate the different data structures currently available:

```javascript
var dataStructures = require('datastructuresnpm');

var stack = new dataStructures.Stack();
var queue = new dataStructures.Queue();
var singlyLinkedList = new dataStructures.SinglyLinkedList();
var doublyLinkedList = new dataStructures.DoublyLinkedList();
var binaryTree = new dataStructures.BinarySearchTree();
var hashTable = new dataStructures.HashTable();
```

## Methods

The methods for each data structure are as follows:

### Stack

1. pop() - removes and returns the top most element in the stack
2. push(element) - pushes a new element on to the stack
3. peek() - returns top most element in the stack but does not remove it
4. sizeOf() - displays size of stack
5. isEmpty() - console logs true or false depending on whether stack is empty or not
6. printStack() - prints all the values in the stack

### Queue

1. enqueue(element) - adds an element to the queue
2. dequeue() - removes and returns the first element in the queue
3. front() - returns first element in the queue but does not remove it
4. isEmpty() - console logs true or false depending on whether queue is empty or not
5. sizeOf() - returns the size of the queue

### Singly Linked List

1. addNode(element) - adds a node to the linked list
2. removeNode(element) - removes a specific node of from the linked list based on the value of the element it holds, e.g.(removeNode(5) will remove the node containing the number '5')
3. insertNodeAt(element, index) - adds a node with an element of your choosing at the index you want (e.g. insertNodeAt(5,2) will insert a node containing the number 5 at index 2)
4. removeNodeAt(index) - removes a node at specified index
5. sizeOf() - returns the size of the linked list
6. isEmpty() - console logs true or false depending on whether linked list is empty or not
7. displayNode(index) - searches for the node at the specified index and displays the information

### Doubly Linked List

Same methods as those for the Singly Linked List, except now every node in the linked list now has a pointer to the next node, and the previous one. Additionally, the last node is tracked as the tail, just as the first is tracked as the head.

### Binary Search Tree

1. addNode(element) - adds a node to the binary search tree
2. removeNode(element) - removes a specific node from the binary search tree based on the value of the element it holds
3. isEmpty() - console logs true or false depending on whether binary tree is empty or not
4. findDepth(element) - console logs the depth of the specified element, if it exists

### Hash Table

1. insert(key, value) - takes a key-value pair, calculates the index via a hash function and inserts it in the table
2. removeAt(index) - remove key-value pair from index as specified by the user
3. removeKey(key) - remove key-value pair based on the name of the key specified by the user
4. revealTable() - reveals the entire table to the user
5. findIndex(key) - find the index of a particular key-value based on the key
6. revealInfo(element) - reveals the key-value pair based on information entered by the user; the user may specify either the key or the index