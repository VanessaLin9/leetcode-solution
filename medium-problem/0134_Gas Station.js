/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currT = 0, totalT=0, pos=0;
    for(let i=0; i<gas.length; i++){
        totalT = totalT + gas[i] - cost[i];
        currT = currT + gas[i] - cost[i]; 
        
        if(currT<0){
            currT = 0
            pos = i+1
        }
    }
    return totalT>=0?pos:-1;
};