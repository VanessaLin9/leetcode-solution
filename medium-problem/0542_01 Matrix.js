// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.


// [BFS]
'use strict';
/*
 * Initialize the distance matrix and create a queues with positions of all elements that contain 0 in mat.
 * @param {number[][]} mat
 * @return {[number[], number[][]]} A queue and a distance array.
 */
function initializeQueueAndNewMatrix(mat){
    let queue = [];                     // The queues of positions starting with 0.
    let newMat = new Array(mat.length); // The distance matrix we will return.
    
    for(let row = 0; row < mat.length; row++){
        // Go through matrix.
        newMat[row] = new Array(mat[row].length);   // Create row array in new matrix.
        
        for(let col = 0; col < mat[row].length; col++){
            if(mat[row][col] === 0){
                // Push to the queue each index position in mat that contains a 0.
                queue.push([row,col]);
                newMat[row][col] = 0;               // Initialize distance to zero.
            }else{
                // If position is 1, then initialize that distance to INF for our BFS search.
                newMat[row][col] = Number.POSITIVE_INFINITY;
            }
        }
    }
    return [queue, newMat];
}
/*
 * Checks if a position is inbounds of the mat array and its value is not 0.
 * @param {number} row number
 * @param {number} col number
 * @param {number[][]} mat 
 * @return {boolean} true if is a valid position, else false.
 */
function isValidPos(row, col, mat, newMat, currDistance){
    return row > -1 && row < mat.length && col > -1 && col < mat[row].length && currDistance < newMat[row][col];
    
}
/**
 * Time: O(m*n): We go through the matrix array twice.
 * Space: O(m*n): The worst case space for our bfs queue.
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat){
    // Create a queue with the index positions that have a value of zero.
    // also, create a new matrix where all nonzero values in mat have a distance of INF for our BFS search.
    let [queue, newMat] = initializeQueueAndNewMatrix(mat);
    
    let travelPos = [[1,0],[0,1],[0,-1],[-1,0]];    // Down, Right, Left, Up travel positions.
    let distance = 1;                               // Initial distance.
    
    // Do BFS starting from all zero positions.
    while(queue.length !== 0){
        let currentQueueSize = queue.length;

        for(let i = 0; i < currentQueueSize; i++){
            // Search out from current distance.
            let [currRow, currCol] = queue.shift();

            for(let [moveRow, moveCol] of travelPos){
                // For each travel position, check if the index containing a 1 has a greater distance than the current.
                // if so, then update the distance for that 1 value.
                moveRow = currRow + moveRow;    // Move current row position.
                moveCol = currCol + moveCol;    // Move current column position.

                if(isValidPos(moveRow, moveCol, mat, newMat, distance)){
                    // If moved position is within bounds and the current distance is less than the distance in that position
                    // Then update its distance and push into the queue.
                    newMat[moveRow][moveCol] = distance;
                    queue.push([moveRow,moveCol]);
                }
            }
        }
        distance++;   
    }
    return newMat;
}

// Time: O(m * n ), since we loop through the array twice.
// Space: O(m * n) worst case scenerio space for our queue.


console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])) //[[0,0,0],[0,1,0],[0,0,0]]