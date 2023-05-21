var minLength = function(s) {
    let str = s
    while(str.includes('AB')|| str.includes('CD')){
         str = str.replace('AB', '').replace('CD', '')
    }
    console.log(str)
    return str.length
};

console.log(minLength('ABFCACDB'));
console.log(minLength('CCCCDDDD'));