class HashTable {
  // m = hashTable.size
  constructor(size){
    this.size = size;
    this.table = [];
    for(let i=0; i<this.size; i++){
      this.table.push([])
    }
  }

  // division method
  hash1(key){
    return key % this.size;
  }

  // modification method
  hash2(key){
    let A = (Math.sqrt(5) -1)/2;
    return Math.floor(this.size * ((key * A) % 1));
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

myHashTable.set(11424, "tank")
myHashTable.set(6254, "vv")
myHashTable.set(4147, "bawbaw")
myHashTable.set(554, "tanktank")

myHashTable.printAll()

console.log(myHashTable.get(554))