// linked list

// 建立 node 的construct function
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// 建立(帶數個function的)linked list的construct function
class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  };

  // linked list function: [push]
  push(value){
    let newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  };

  // linked list function: [pop]
  pop(){
    if(!this.head) return null;
    if(this.length === 1){
      let temp = this.head
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      // if(currentNode.next.next !== null){
      //   currentNode = currentNode.next;
      // } 本來我自己這樣寫，只切一個沒問題，切太多個會不知道為什麼會有bug，改下面老師的寫法就OK
      for(let i=0; i<this.length -2; i++){
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  };

  // linked list function: [shift]
  shift(){
    if(!this.head){ 
      return null;
    } else if(this.length === 1){
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  };
  // linked list function: [unshift]
  unshift(value){
     let newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++
  };

  // linked list function: [insert]
  insertAt(index, value){
    
    if(this.length<index ||index < 0){
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return;
    } else if(index === this.length){
      this.push(value)
      return;
    } else {
      let newNode = new Node(value);
      let currentNode = this.head;
      for(let i=1; i<index; i++){
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return;
    }
  }

  // linked list function: [pint]
  pintAll(){
    if(this.length === 0){
      console.log("This linked list is empty")
      return;
    } 
    let currentNode = this.head;
    while(currentNode !== null){
      console.log(currentNode.value)
      currentNode = currentNode.next;
    }
  };
}



// 建立一個 linked list
let myLinkedList = new LinkedList()


myLinkedList.push("bawbaw");
myLinkedList.push("tank");
myLinkedList.push("meatball");
myLinkedList.push("maiomaio");

//  pop 測式
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.pop();

// shift 測試
// let baw = myLinkedList.shift();
// console.log(baw)

// unshift 測試
// myLinkedList.unshift('tantan')

// inset 測試
myLinkedList.insertAt(2, 'reman')

// pint linked list
myLinkedList.pintAll()
console.log(myLinkedList.length)

