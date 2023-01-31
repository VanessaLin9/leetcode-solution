// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(set, sr, sc, color) {
  let origin = set[sr][sc]
 
  return  fill(set, sr, sc, color, origin)
};

function fill(set, sr, sc, newColor, origin){
  // 檢查是否超出邊界，是否已是新色，是否跟舊色不同
  if(sr < 0 || sc < 0 || sr >= set.length || sc >= set[sr.length] || set[sr][sc] === newColor || set[sr][sc] !== origin) {
  
    return set // 重新賦值前就返回
  };

  // 重新賦值
  set[sr][sc] = newColor;

  //呼叫四邊相鄰的
  fill(set, sr+1, sc, newColor, origin)
  fill(set, sr-1, sc, newColor, origin)
  fill(set, sr, sc+1, newColor, origin)
  fill(set, sr, sc-1, newColor, origin)

  return set

}