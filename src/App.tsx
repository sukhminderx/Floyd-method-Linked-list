import React from "react";
import logo from "./logo.png";
import "./App.css";
import { LinkedList } from "./SinglyLinkedList";

function App() {
  /* below contains Singly Linked List ADT */
  // create the linked list
  const linkedList = new LinkedList();

  // add 1 to beginning
  linkedList.insertAtBeginning(1);
  // add some items 2,3,4,5 to the end
  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(3);
  linkedList.insertAtEnd(5);

  console.log('after insertAtEnd');
  linkedList.traverseAndPrintNode();

  // add 1 to beginning
  linkedList.insertAtBeginning(0);

  console.log('after insertAtBeginning');
  linkedList.traverseAndPrintNode();

  // insert in middle
  linkedList.insertAfterNode(3,4);

  console.log('after insertAfterNode');
  linkedList.traverseAndPrintNode();

  /* above contains Singly Linked List ADT */

  /* ------------------------------------- */
  
  /* below contains methods */

  console.log('Is cycle?? -> '+ linkedList.floydMethodToCheckWhetherCyclic());
  // create cycle  
  linkedList.createACycle(6, 3);
  console.log('Is cycle?? -> '+ linkedList.floydMethodToCheckWhetherCyclic());

  /* above contains methods */

  /* ------------------------------------- */


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Linked List ADT methods... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
