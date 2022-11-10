// 用 linked list 做一個 stack
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  push(value){
    let newNode = new Node(value)
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
  }

  pop(){
    if(!this.head) return null;
    if(this.length === 1){
      let result = this.head;
      this.head = null;
      this.length = 0;
      return result;
    } else {
      let currentNode = this.head;
      for(let i=0; i<this.length-2; i++){
        currentNode = currentNode.next;
      }
      let result = currentNode.next;
      currentNode.next = null;
      this.length--;
      return result;
    }
  }

  pintAll(){
    if(!this.head){
      console.log('this stack is empty')
      return;
    }
    let currentNode = this.head;
    while(currentNode !== null){
      console.log(currentNode.value)
      currentNode = currentNode.next;
    }
  }
}

let myStack = new Stack()

myStack.push('tanktank');
myStack.push('bawbaw');
myStack.push('yoyoyo')

myStack.pop()


myStack.pintAll()