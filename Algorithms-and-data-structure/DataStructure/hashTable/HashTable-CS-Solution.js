function HashTable() {
  this.SIZE = 16;

  // the array will be instantiated as [undefined, undefined....]
  // pop() and push() shouldn't be used on the storage
  this.storage = new Array(this.SIZE);
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function (key, value) {
  let hash = hashCode(key, this.SIZE)

  if (this.storage[hash]) this.storage[hash][key] = value;
  else {
    this.storage[hash] = {}
    this.storage[hash][key] = value;
  }

  // if (!this.storage[hash]) this.storage[hash] = {};
  // this.storage[hash][key] = value;
};

// return a previously stored value
HashTable.prototype.get = function (key) {
  let hash = hashCode(key, this.SIZE);
  return this.storage[hash][key]
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function (key) {
  let hash = hashCode(key, this.SIZE);
  let removed = this.storage[hash][key]
  this.storage[hash][key]
  return removed
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size) {
  let hash = 0;
  if (string.length === 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size;
}

const newTable = new HashTable()
newTable.set('key1', 'value1')
newTable.set('key2', 'value2')
newTable.remove('key1')
console.log(newTable)