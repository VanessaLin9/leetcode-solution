// A square matrix is said to be an X-Matrix if both of the following conditions hold:

// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.
// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let row = grid[0].length;
    let column = grid.length;
    for(let i=0; i<column; i++){
        for(let j=0; j<row; j++){
            if(j === i || j === row-(1+i)){
               if (grid[i][j] === 0) return false;
            } else {
                if (grid[i][j] !== 0) return false;
            }
        }
    }
    return true;
};

console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]])) // true