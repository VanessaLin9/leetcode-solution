class HashTable {
  // m = hashTable.size
  constructor(size){
    this.size = size;
    this.table = [];
    for(let i=0; i<this.size; i++){
      this.table.push([])
    }
  }

  // parse string to integer
  parse(str){
    let result = 0;
    for(let i=0; i<str.length; i++){
      result += str.charCodeAt(i)
    }
    return result % this.size;
  }

  // division method
  hash1(key){
    return key % this.size;
  }

  // modification method
  hash2(key){
    let parseKey = 0;
    if(typeof key !== 'number'){
      parseKey = this.parse(key);
    } else {
      parseKey = key;
    }
    let A = (Math.sqrt(5) -1)/2;
    return Math.floor(this.size * ((parseKey * A) % 1));
  }

  // set method
  set(key, value){
    let index = this.hash2(key)
    this.table[index].push({key, value});
  }

  // get
  get(key){
    let index = this.hash2(key);
    for(let i=0; i<this.table[index].length; i++){
      if(this.table[index][i].key === key) return this.table[index][i];
    }
    return null;
  }

  printAll(){
    console.log(this.table)
  }
}


let myHashTable = new HashTable(6);

// 1. key 為 number的時候

// myHashTable.set(11424, "tank")
// myHashTable.set(6254, "vv")
// myHashTable.set(4147, "bawbaw")
// myHashTable.set(554, "tanktank")

// myHashTable.printAll()

// console.log(myHashTable.get(554))

// 2. key 不為 number的時候 => 舉 CSS 當例子

myHashTable.set('white', '#FFFFFF')
myHashTable.set('red', '#FF0000')
myHashTable.set('magenta', '#FF00FF')

myHashTable.printAll()
console.log(myHashTable.get('red').value)