/* 
A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables combine lookup, insert, and delete operations in an efficient way. The key is sent to a hash function that performs arithmetic operations on it. The result (called the hash value or hash) is an index of the key-value pair.
Assosiate with Array mapping with a Key value pair, 
in JS we have new Map
*/
//console.log(new Map()) // {}

const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i)
    }
    return hashedKey % size;
}
class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size)

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()

        }
    }
    insert(key, value) {
        let idx = hash(key, this.size)
        this.buckets[idx].set(key, value)
    }
    remove(key) {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }
    search(key) {
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}
const hashTable = new HashTable()
hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupitet')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')
console.log(hashTable) /* 
HashTable {
  size: 20,
  buckets: [
    Map(0) {},
    Map(1) { 'amy' => 'mercury' },
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(1) { 'rei' => 'mars' },
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(1) { 'darien' => 'tuxedo mask' },
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(3) {
      'serena' => 'moon',
      'lita' => 'jupitet',
      'mina' => 'venus'
    },
    Map(0) {},
    Map(0) {}
  ]
}
  */
console.log(hashTable.search('rei')) //mars
console.log(hashTable.search('lita'))  //jupitet
console.log(hashTable.search('serena')) //moon
hashTable.remove('darien')
hashTable.remove('mina')
console.log(hashTable)
/*
HashTable {
  size: 20,
  buckets: [
    Map(0) {},
    Map(1) { 'amy' => 'mercury' },
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(1) { 'rei' => 'mars' },
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(0) {},
    Map(2) { 'serena' => 'moon', 'lita' => 'jupitet' },
    Map(0) {},
    Map(0) {}
  ]
}
*/

