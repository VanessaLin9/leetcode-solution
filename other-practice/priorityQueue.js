class Node {
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = []
  }

  // enqueue
  enqueue(value, priority){
    let newNode = new Node(value, priority);

    if(this.values.length === 0){
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length -1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while(parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
      ){
        // swap
        let result = this.values[parentIndex];
        this.values[parentIndex] = this.values[newIndex];
        this.values[newIndex] = result;
        // update index
        newIndex = parentIndex;
        parentIndex = Math.floor((newIndex - 1)/2);
      }
  }

  // dequeue
  dequeue(){
    // 剩0
    if(this.values.length === 0) return null;

    // 剩1
    if(this.values.length === 1){
      let removeNode = this.values.pop();
      return removeNode;
    }

    // 其他
    let temp = this.values.pop();
    this.values.push(this.values[0])
    this.values[0] = temp;
    let removeNode = this.values.pop();

    this.maxHeapify(0);

    return removeNode
  }

  maxHeapify(i){
    let largest ;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    if(l <= this.values.length -1 &&
      this.values[l].priority > this.values[i].priority){
        largest = l;
      } else {
        largest = i;
      }
    if(r <= this.length -1 &&
      this.values[r].priority > this.values[largest].priority){
        largest = r;
      }
    
    if(largest !== i){
      //swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}


// test
let pq = new PriorityQueue();
pq.enqueue("eat breakfast", 45);
pq.enqueue("bawbaw", 7);
pq.enqueue("tanktank", 3);
pq.enqueue("RRRRRR FIRE", 100);
pq.enqueue("watch ball game", 25);


console.log(pq)

while(pq.values.length >= 1){
  let test = pq.dequeue()
  console.log(test.value, test.priority);
}