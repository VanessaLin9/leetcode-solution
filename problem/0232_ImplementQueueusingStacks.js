// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// 用兩個stack做出Queue的效果
// 想像只用其中一個(stack1)扮，stack2用來承接

var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while(this.stack1.length !== 0){
    this.stack2.push(this.stack1.pop())
  }

  let pop = this.stack2.pop()
  
  while(this.stack2.length !== 0){
    this.stack1.push(this.stack2.pop())
  }
  return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while(this.stack1.length !== 0){
    this.stack2.push(this.stack1.pop())
  }
  let pop = this.stack2.pop()
  this.stack1.push(pop)

  while(this.stack2.length !== 0){
    this.stack1.push(this.stack2.pop())
  }

  return pop;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */