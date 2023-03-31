/**
 * @param {number[][]} grid
 * @return {number}
 */

// BFS from 討論區
// var orangesRotting = function(grid) {
//   const height = grid.length;
//   const width = grid[0].length;
//   let fresh = 0;
//   const queue = [];
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       if (grid[i][j] === 2) queue.push([i, j]);
//       if (grid[i][j] === 1) fresh++;
//     }
//   }
//   let minute = 0;
//   while (queue.length) {
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const [x, y] = queue.shift();
//       if (x - 1 >= 0 && grid[x - 1][y] === 1) {
//         grid[x - 1][y] = 2;
//         fresh--;
//         queue.push([x - 1, y]);
//       }
//       if (x + 1 < height && grid[x + 1][y] === 1) {
//         grid[x + 1][y] = 2;
//         fresh--;
//         queue.push([x + 1, y]);
//       }
//       if (y - 1 >= 0 && grid[x][y - 1] === 1) {
//         grid[x][y - 1] = 2;
//         fresh--;
//         queue.push([x, y - 1]);
//       }
//       if (y + 1 < width && grid[x][y + 1] === 1) {
//         grid[x][y + 1] = 2;
//         fresh--;
//         queue.push([x, y + 1]);
//       }
//     }
//     if (queue.length > 0) minute++;
//   }
//   return fresh === 0 ? minute : -1;
// };

// BFS 自己寫
var orangesRotting = function(grid) {
    const q = [];
    let m = grid.length;
    let n = grid[0].length;
    let fresh = 0;

    // find start push to q and calculate fresh ranges
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 2) q.push([i, j]);
            if(grid[i][j] === 1) fresh ++
        }
    }
    // console.log('fresh', fresh)
    let min =0;
    const travel = [[0,1], [0,-1], [1,0], [-1,0]]
    while(q.length !== 0){
        let size = q.length;
        for(let i=0; i<size; i++){
            let [currCol, currRow] = q.shift()
            // console.log('curr', currCol, currRow)
            for(let [traCol, traRow] of travel){
                // console.log('travel', traCol, traRow)
                let [newCol, newRow] = [currCol + traCol, currRow + traRow];
                // console.log(newCol, newRow)
                if(isValidate(newCol, newRow)){
                    // console.log('validate', newCol, newRow)
                    grid[newCol][newRow] = 2;
                    fresh --;
                    q.push([newCol, newRow])
                }
            }
        }
        if(q.length>0) min++
    }
    function isValidate(newCol, newRow){
      // console.log(newCol, newRow)
        if(newCol <0 || newCol >= m || newRow<0 || newRow >=n || grid[newCol][newRow] !== 1){
            return false
        }
        return true
    }
    return fresh === 0? min : -1;
};
// TC: n^2
// MC: n

console.log(orangesRotting([[1,2]])) //1