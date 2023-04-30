/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
// unfinished
var minimumCost = function(start, target, specialRoads) {
    let minCost = currCost(start, target)
    let start = []
    let end = []
    let cost = []
    for(let i=0; i<specialRoads.length; i++){
      let [x1, y1, x2, y2, cost] = specialRoads[i]
      let temp = currCost([x1, y1], [x2, y2])
      if(temp > cost){
        queue.push([x1, y1])
        stack.push([x2, y2])
      }
    }
    console.log(queue, stack)
    return minCost
}
;

function currCost(currStart, currEnd){
  let [x1, y1] = currStart
  let [x2, y2] = currEnd
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

console.log(minimumCost([1,1], [4,5], [[1,2,3,3,2],[3,4,4,5,1]]))