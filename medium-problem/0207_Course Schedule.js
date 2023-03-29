// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Topological Sort
// var canFinish = function(numCourses, prerequisites) {
//   const order = [];
//   const queue = [];
//   const graph = new Map();
//   const indegree = Array(numCourses).fill(0);

//   for (const [e, v] of prerequisites) {
//     // build graph map
//     if (graph.has(v)) {
//       graph.get(v).push(e);
//     } else {
//       graph.set(v, [e]);
//     }
//     // build indegree array
//     indegree[e]++;
//   }

//   for (let i = 0; i < indegree.length; i++) {
//     if (indegree[i] === 0) queue.push(i);
//   }

//   while (queue.length) {
//     const v = queue.shift();
//     if (graph.has(v)) {
//       for (const e of graph.get(v)) {
//         indegree[e]--;
//         if (indegree[e] === 0) queue.push(e);
//       }
//     }
//     order.push(v);
//   }

//   return numCourses === order.length;
// };
// TC:
// MC:

// DFS
var canFinish = function(numCourses, prerequisites) {
    
    const preMap = {};
    const visited = {};
    
	// build the adacency list
    for(let i = 0; i< prerequisites.length; i++){
        if(preMap[prerequisites[i][0]] === undefined){
            preMap[prerequisites[i][0]] = [prerequisites[i][1]]
        } else {
            preMap[prerequisites[i][0]].push(prerequisites[i][1])
        }
    }
    console.log(preMap)
    const dfs = (node) => {
        if(visited[node]){
            return false;
        }
        if(preMap[node] !==undefined){
            if (preMap[node].length === 0){
                return true;
            }
        
            visited[node] = true;
            for(let val of preMap[node]){
                if(!dfs(val)){
                    return false
                }
            }
            visited[node] = false;
            
            preMap[node] = [];
        }
        return true;

    }
    
    for(let key in preMap){
        if(!dfs(key)){
            return false
        }
    }
    return true

};
// TC:
// MC:


// BFS
// var canFinish = function(numCourses, prerequisites) {

// }

// TC:
// MC:

console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])) //false