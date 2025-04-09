// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/description/
// Tag: C#, Array, Depth-First Search, Breadth-First Search, Matrix, Easy, DFS
public class Solution {
    public int[][] FloodFill(int[][] image, int sr, int sc, int color) {
        var origin = image[sr][sc];
        if(origin == color) return image;
        
        Fill(sr, sc);
        return image;

        void Fill(int r, int c){
            if(image[r][c] != origin) return;
            image[r][c] = color;
            if(r+1<image.Length){
                Fill(r+1, c);
            }
            if(r-1 >= 0){
                Fill(r-1, c);
            }
            if(c+1<image[r].Length){
                Fill(r, c+1);
            }
            if(c-1>=0){
                Fill(r, c-1);
            }
            return;
        }
    }
}
// time complexity: O(n*m)
// space complexity: O(n*m)