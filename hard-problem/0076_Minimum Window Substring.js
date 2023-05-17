/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = new Map();
  let min = '', left = 0, right = -1;

  for(let i=0; i<t.length; i++){
      if(map.has(t[i])){
          map.set(t[i], map.get(t[i]) + 1)
      } else {
          map.set(t[i], 1)
      }
  }  
  let count = map.size

  while(right <=s.length){
      if(count === 0){
          let curr = s[left];
          if(map.has(curr)){
              map.set(curr, map.get(curr)+1)
              if(map.get(curr) >0) count ++;
          }
        let temp = s.substring(left, right+1);
        if(min === '') min = temp;
        else min = min.length<temp.length? min:temp;

        left ++
      } else {
          right ++;

          let curr = s[right]
          if(map.has(curr)){
              map.set(curr, map.get(curr)-1)
              if(map.get(curr) === 0) count --;                     
          }
      }
  }

  return min
};

