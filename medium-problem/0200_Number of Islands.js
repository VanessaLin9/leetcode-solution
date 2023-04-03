// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
var numIslands = function(grid) {
    let count =0
    for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
        if(grid[i][j] === '1'){
          sinkIsland(i, j, grid)
          count ++
        }
      }
    }
    return count
};

function sinkIsland(row, col, grid){
  if(row<0 || row >= grid.length || col<0 || col >= grid[0].length || grid[row][col] === '0') return;
  grid[row][col] = '0'
  sinkIsland(row+1, col, grid)
  sinkIsland(row-1, col, grid)
  sinkIsland(row, col+1, grid)
  sinkIsland(row, col-1, grid)
}

// TC: nm
// MC: 1

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])) //1