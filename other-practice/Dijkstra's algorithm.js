class Node {
  constructor(value){
    this.value = value;
    this.visited = false;
    this.edges = [];
    this.distanceFromStartNode = Infinity;
    this.previous = null;
  }

  addEdges(edge){
    this.edges.push(edge);
  }
}

class Edge {
  constructor(node, weight){
    this.node = node;
    this.weight = weight;
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");

A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));

class MinHeap {
  constructor(){
    this.values = [];
  }

  enqueue(node) {
    if(this.values.length === 0){
      this.values.push(node);
      return true;
    }
    // 已有node的時候按照 distanceFromStartNode 越小的排越前面
    this.values.push(node);
    let newIndex = this.values.length -1;
    let parentIndex = Math.floor((newIndex - 1)/2);
    while ( 
      parentIndex >= 0 &&
      this.values[newIndex].distanceFromStartNode <
        this.values[parentIndex].distanceFromStartNode
    ) {
      // swap
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1)/2);
    }
  }

  dequeue() {
    if(this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      let result  = this.values.pop()
      return result;
    }

    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removeNode = this.values.pop()

    this.minHeapify(0);

    return removeNode;
  }

  minHeapify(i){
    let smallest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    if ( 
      l <= this.values.length -1 &&
      this.values[l].distanceFromStartNode <
        this.values[i].distanceFromStartNode 
    ) {
      smallest = l;
    } else {
      smallest = i;
    }

    if ( 
      r <= this.values.length -1 &&
      this.values[r].distanceFromStartNode <
        this.values[smallest].distanceFromStartNode 
    ) {
      smallest = r;
    }
    
    if ( smallest !== i){
      let temp = this.values[i];
      this.values[i] = this.values[smallest];
      this.values[smallest] = temp;
      this.minHeapify(smallest)
    }
  }

  decrease_priority(node) {
    let newIndex = this.values.indexOf(node);
    let parentIndex = Math.floor((newIndex - 1)/2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].distanceFromStartNode <
        this.values[parentIndex].distanceFromStartNode
    ) {
      // swap
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }
}

function Dijkstra(node) {
  let MH = new MinHeap();
  node.distanceFromStartNode = 0; // 起點
  node.visited = true;
  MH.enqueue(A);
  MH.enqueue(B);
  MH.enqueue(C);
  MH.enqueue(D);
  MH.enqueue(E);
  MH.enqueue(F);

  let currentNode = MH.dequeue(); 
  // 會拿distanceFromStartNode最小的 = 一開始送進來的起始node(設定為0)

  while(MH.values.length > 0){
    // 步驟
    // 1. 找到MH中最小值的Node -> currentNode
    // 2. node鄰居中沒拜訪過的 -> neighborNode
    // 3. neighborNode.distance(d1) > currentNode.distance(d2) + weight(d3)
    // 4. neighborNode.distance = currentNode.distance + weight
    // neighborNode.previous = currentNode
    // MH decrease neighborNode 的 priority

    currentNode.edges.forEach((edge) => {
      let neighborNode = edge.node;
      if (!neighborNode.visited) {
        let d1 = neighborNode.distanceFromStartNode;
        let d2 = currentNode.distanceFromStartNode;
        let d3 = edge.weight;

        if (d1 > d2 + d3) {
          neighborNode.distanceFromStartNode = d2 + d3;
          neighborNode.previous = currentNode;
          MH.decrease_priority(neighborNode)
        }
      }
    })

    currentNode = MH.dequeue();
    currentNode.visited = true;
  }
}

Dijkstra(E);
console.log("A's information");
console.log(A.distanceFromStartNode);
console.log(A.previous.value);
console.log("B's Info");
console.log(B.distanceFromStartNode);
console.log(B.previous.value);
console.log("C's Info");
console.log(C.distanceFromStartNode);
console.log(C.previous.value);
console.log("D's Info");
console.log(D.distanceFromStartNode);
console.log(D.previous.value);
console.log("E's Info");
console.log(E.distanceFromStartNode);
console.log(E.previous);
console.log("F's Info");
console.log(F.distanceFromStartNode);
console.log(F.previous.value);