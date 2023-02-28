describe('Advanced Level Challenges...', function() {
  describe('forEach', function() {
    it('should iterate over arrays, providing access to the element, index, and array itself', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      forEach(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });

    it('should only iterate over the array elements, not properties of the array', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      fruits.shouldBeIgnored = 'Ignore me!';
      forEach(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });
  });

  describe('map', function() {
    it('should apply a function to every value in an array', function() {
      var doubled = map([1, 2, 3], function(num) {
        return num * 2;
      });
      expect(doubled).to.eql([2, 4, 6]);
    });
  });

  describe('filter', function() {
    it('should return all even numbers in an array', function() {
      var isEven = function(num) { return num % 2 === 0; };
      var evens = filter([1, 2, 3, 4, 5, 6], isEven);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should return all odd numbers in an array', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      var odds = filter([1, 2, 3, 4, 5, 6], isOdd);
      expect(odds).to.eql([1, 3, 5]);
    });
  });

  describe('reject', function() {
    it('should reject all even numbers', function() {
      var isEven = function(num) { return num % 2 === 0; };
      var odds = reject([1, 2, 3, 4, 5, 6], isEven);
      expect(odds).to.eql([1, 3, 5]);
    });

    it('should reject all odd numbers', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      var evens = reject([1, 2, 3, 4, 5, 6], isOdd);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should reject all odd values in object', function() {
      var obj = {a:1, b:2, c:3, d:4};
      var isOdd = function(value, key, collection) { return value % 2 !== 0; };
      var evens = reject(obj, isOdd);
      expect(evens).to.eql({b:2, d:4});
    })
  });

  describe('uniq', function() {
    it('should return all unique values contained in an unsorted array', function() {
      var list = [1, 2, 1, 3, 1, 4];
      expect(uniq(list)).to.eql([1, 2, 3, 4]);
    });

    it('should handle iterators that work with a sorted array', function() {
      var iterator = function(value) { return value +1; };
      var list = [1, 2, 2, 3, 4, 4];
      expect(uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
    });
  });

  describe('indexOf', function() {
    it('should have 40 in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 40)).to.be(3);
    });

    it('should be able to compute indexOf even when the native function is undefined', function() {
      var numbers = [10, 20, 30];
      expect(indexOf(numbers, 20)).to.be(1);
    });

    it('returns -1 when the target cannot be found not in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 35)).to.be(-1);
    });

    it('returns the first index that the target can be found at when there are multiple matches', function() {
      var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
      expect(indexOf(numbers, 40)).to.be(1);
    });
  });

  describe('once', function() {
    it("should only run a user-defined function if it hasn't been run before", function() {
      var num = 0;
      var increment = once(function() {
        num += 1;
      });
      increment();
      increment();
      expect(num).to.equal(1);
    });
  });

  describe('reduce', function() {
    it('should sum up an array', function() {
      var add = function(tally, item) {return tally + item; };
      var total = reduce([1, 2, 3], add);
      expect(total).to.equal(6);
    });

    it('should find the difference in an array', function() {
      var difference = function(tally, item) {return tally - item; };
      var total = reduce([1, 2, 3], difference);
      expect(total).to.equal(-4);
    });

    it('should sum up an array when start provided', function() {
      var add = function(tally, item) {return tally + item; };
      var total = reduce([1, 2, 3], add, 2);
      expect(total).to.equal(8);
    });

    it('should find the difference in an array when start provided', function() {
      var difference = function(tally, item) {return tally - item; };
      var total = reduce([1, 2, 3], difference, -1);
      expect(total).to.equal(-7);
    });
  });

  describe('every', function() {
    it('should check if all elements are odd', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      expect(every([1, 3, 5], isOdd)).to.be(true);
      expect(every([1, 4, 5], isOdd)).to.be(false);
    });
  });

  describe('flatten', function() {
    it('should flatten nested arrays', function() {
      expect(flatten([1, [2, 3, [4]]])).to.eql([1, 2, 3, [4]]);
    });
  });

  describe('flattenDeep', function() {
    it('should flatten nested arrays recursively', function() {
      expect(flattenDeep([1, [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
    });
  });
});