// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  // allocate into storage the value at the current index and then increment
  this.storage[this.index++] = value;
};

Stack.prototype.pop = function () {
  // const popped = this.storage[this.index - 1];
  // delete this.storage[this.index - 1];
  // this.index -= 1;
  // return popped;

  // if nothing is in the stack, return underfined
  if (this.index <= 0) return undefined;

  // store the popped element to return 
  let removed = this.storage[this.index - 1];

  // decrement the index and then delete the item stored at that index
  delete this.storage[--this.index]
  return removed;
};
