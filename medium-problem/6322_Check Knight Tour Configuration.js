// There is a knight on an n x n chessboard. In a valid configuration, the knight starts at the top-left cell of the board and visits every cell on the board exactly once.

// You are given an n x n integer matrix grid consisting of distinct integers from the range [0, n * n - 1] where grid[row][col] indicates that the cell (row, col) is the grid[row][col]th cell that the knight visited. The moves are 0-indexed.

// Return true if grid represents a valid configuration of the knight's movements or false otherwise.

// Note that a valid knight move consists of moving two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The figure below illustrates all the possible eight moves of a knight from some cell.

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
//  -AC
var checkValidGrid = function(grid) {
  let row = grid[0].length 
  let column = grid.length
  const step = row * column;
  // console.log(step)
  let i = 0;
  let sr = 0;
  let sc = 0;
  return check(sr, sc, i)

  function check(sr, sc, i){
    if(i>= step) return true;
    if(sr<0 || sc<0 || sr>= row || sc>=column || grid[sr][sc] === "x"|| grid[sr][sc] !== i) {
      return false
    }
    grid[sr][sc] = "x"

    return check(sr+1, sc+2, i+1) || check(sr+2, sc+1, i+1) || check(sr-1, sc-2, i+1) || check(sr-2, sc-1, i+1)|| check(sr+1, sc-2, i+1) || check(sr+2, sc-1, i+1) || check(sr-1, sc+2, i+1) || check(sr-2, sc+1, i+1)
  } 
};




console.log(checkValidGrid([[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]])) //true
console.log(checkValidGrid([[0,3,6],[5,8,1],[2,7,4]])) //false