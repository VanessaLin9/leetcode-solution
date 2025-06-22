// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
// Tag: Array, Matrix, Medium

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


// [i][j] -> [i][len -1 -i]

var rotate = function(matrix) {
    let n = matrix.length; //題目指定 n*n 的 n
    let depth = Math.floor(n/2) //深度:從外往內有幾層要轉
    for(let i=0; i<depth; i++){ //迴圈1 -> 深度
        let len = n-2*i-1; //每層要跑的長度，每深一層-2
        let oop = n-1-i; //轉90度位移公式
        for(let j=0; j<len; j++){ //迴圈2 -> 跑每圈的上面那排每一個，都跑完=整圈跑完
            let temp = matrix[i][i+j] //每圈的最左上角用temp接
            matrix[i][i+j] = matrix[oop-j][i] //左上=最左下，Y軸座標等於oop-j補正層數
            matrix[oop-j][i] = matrix[oop][oop-j] //最左下=最右下
            matrix[oop][oop-j] = matrix[i+j][oop] //最右下=最右上
            matrix[i+j][oop] = temp //最右上=最左上(裝進temp)
        }
    }
};

 