public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        int t = 0;
        for(int i=0; i< flowerbed.Length; i++){
            if(flowerbed[i] == 0){
                if(i == 0 || flowerbed[i-1] != 1){ 
                    if(i+1 >= flowerbed.Length || flowerbed[i+1] == 0){
                        flowerbed[i] = 1;
                        t ++;
                    }
                }
            }
        }
        return t >= n;
    }
}