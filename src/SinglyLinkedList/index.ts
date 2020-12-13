import { Node } from "./Node";

export class LinkedList {
  // head always points to first node
  // last node's next is always null
  head: Node | null;
  constructor() {
    this.head = null;
  }

  get _head() {
    //returns head of LL
    return this.head;
  }

  /*
    construct a node with data
    its next should be what is head as we are inserting in beginning
    head points to this node as it is at beginning
  */
  insertAtBeginning(data: number) {
    const node = new Node(data);
    node._next = this.head;
    this.head = node;
  }

  /*
    construct a node with data
    its next should be null as it is to be at end
    traverse till end to get last node
    last node's next should point to new node
  */
  insertAtEnd(data: number) {
    const node = new Node(data);
    node._next = null;
    const lastNode = this.traverseAndReturnLastNode();
    lastNode._next = node;
  }

  reverseLinkedList(head: Node): any {
    if (!head) return head; // head is null, LL is empty
    if (head._next === null) return head;
    // LL contains only one Node
    else {
      const Node2nd = head._next; // head moved to next Node
      head._next = null;
      let reverse = this.reverseLinkedList(Node2nd);
      return reverse;
    }
  }

  /* ****************************** */

  /*
    Josephus Circle
    Circular LL has n nodes
    traverse and remove mth every time
    find out last node
  */

  /*
    construct a node with data
    --IF--
    this.head is null, so 1st node being inserted into Circular Linked List; then node.next to be node itself
    head to be node if 1st node is being added
    --ELSE--
    traverse to nodeBeforeHead using currNode
    node.next = head
    nodeBeforeHead.next to be node
  */
  insertAtBeginningForCircularLL(data: number) {
    const node = new Node(data);
    if (!this.head) {
      node._next = node;
    } else {
      node._next = this.head;
      const nodeBeforeHead = this.traverseAndReturnNodeBeforeHead();
      nodeBeforeHead._next = node;
    }
    this.head = node; // new node to be head
  }

  /*
  construct a node with data
  --IF--
  this.head is null, so 1st node being inserted into Circular Linked List; then node.next to be node itself
  head to be node if 1st node is being added
  --ELSE--
  traverse to nodeBeforeHead using currNode
  node.next = head
  nodeBeforeHead.next to be node
*/
  insertAtEndForCircularLL(data: number) {
    const node = new Node(data);
    if (!this.head) {
      node._next = node;
      this.head = node; // this becomes head if 1st node is being added
    } else {
      node._next = this.head;
      const nodeBeforeHead = this.traverseAndReturnNodeBeforeHead();
      nodeBeforeHead._next = node;
    }
  }
  /*
  iterate over currentNode starting from head
  last node's next is head again
*/
  traverseAndReturnNodeBeforeHead(): Node {
    // T = O(n)
    let currentNode = this.head as Node;
    while (currentNode.next !== this.head) {
      currentNode = currentNode.next as Node;
    }
    return currentNode;
  }

  operateJosephusCircle() {// only for Circular List
    let currentNode = this.head as Node;
    if (currentNode) {
      let m=0; // m should be 3
      while (currentNode.next !== this.head) {
        if(m%3==0 && m!==0) {          
        currentNode._next = currentNode._next!._next;
        }
        ++m;
      }
    }
  }

  /* ****************************** */

  /*
    construct a node with data
    traverse till <to> node to get cycle node
    new node's next should be towards <to> node to create the cycle
    traverse till end to get last node
    last node's next should point to new node
  */
  createACycle(data: number, to: number) {
    const node = new Node(data);
    const toNode = this.traverseTillNode(to);
    node._next = toNode;
    const lastNode = this.traverseAndReturnLastNode();
    lastNode._next = node;
  }

  /*
    use 2 pointers and traverse the Linked List
    ptr1 -> moves 1 step at a time
    ptr2 -> moves 2 steps at a time
    keep checking whether they meet
    if they meet, LL is cyclic else it's not!!
  */
  floydMethodToCheckWhetherCyclic() {
    let ptr1 = this.head;
    let ptr2 = this.head;

    if (ptr1 && ptr2) {
      // loop should break when both pointers reach the same node or when fast pointer ptr2 reaches end
      while (this.conditionForCyclic(ptr1, ptr2)) {
        ptr1 = ptr1._next!;
        ptr2 = ptr2._next!._next!;
      }
    }
    return ptr2 !== null ? true : false;
  }

  conditionForCyclic(ptr1: Node, ptr2: Node): boolean {
    let continueWhile = true;
    if (!ptr2) {
      continueWhile = false;
    } else if (
      ptr2 &&
      ptr1._data === ptr2!._data &&
      ptr2!._data !== this.head!._data
    ) {
      // should not be at head
      continueWhile = false;
    }
    return continueWhile;
  }

  /*
    initialise the node
    get needed node by traversing till it
    newNode next to be neededNode.next
    neededNode.next to be newNode
  */
  insertAfterNode(after: number, data: number) {
    const newNode = new Node(data);
    const neededNode = this.traverseTillNode(after);
    newNode._next = neededNode._next;
    neededNode._next = newNode;
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
    print each node meanwhile
  */
  traverseAndPrintNode() {
    let currentNode = this.head as Node;
    if (currentNode) {
      while (currentNode.next !== null) {
        console.log(currentNode._data);
        currentNode = currentNode.next;
      }
      console.log(currentNode._data);
    }
  }

  /* helper methods */

  /*
    iterate over currentNode starting from head
    last node's next is null
  */
  traverseAndReturnLastNode(): Node {
    let currentNode = this.head as Node;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /*
    iterate over currentNode starting from head
    needed node's _data is currentNode.data
  */
  traverseTillNode(data: number): Node {
    let currentNode = this.head as Node;
    while (currentNode.data !== data) {
      currentNode = currentNode.next as Node;
    }
    return currentNode;
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
  */
  traverseAndReturnPenultimateNode(): Node {
    let currentNode = this.head as Node;
    let penultimateNode: Node | null = null;
    while (currentNode.next !== null) {
      penultimateNode = currentNode;
      currentNode = currentNode.next;
    }
    return penultimateNode as Node;
  }

  /*
    iterate over currentNode starting from head
    keep prevNode in memory
    needed node's _data is prevNode.data
  */
  traverseTillPrevNode(data: number): Node {
    let currentNode = this.head as Node;
    let prevNode: Node | null = null;
    while (currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.next as Node;
    }
    return prevNode as Node;
  }
}
