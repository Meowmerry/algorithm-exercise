describe('Arrays/Errays', () => {
  let array, contents;

  beforeEach(() => {
    array = new Erray();
    contents = array.contents;
  });

  describe('new Erray', () => {
    it('should return an instance of the Erray class', () => {
      expect(array).to.be.a(Erray);
    });

    it('should create instances that share a prototype with the class', () => {
      expect(array.__proto__).to.eql(Erray.prototype);
    });

    it('should have a \'contents\' property that is initially empty', () => {
      expect(contents).to.not.be(undefined);
      expect(contents).to.eql({});
    });

    it('should have a \'length\' property that is initially 0', () => {
      expect(array.length).to.not.be(undefined);
      expect(array.length).to.be(0);
    })
  });

  describe('push', () => {
    it('should be a function', () => {
      expect(array.push).to.be.a('function');
    });

    it('should push one element to array', () => {
      array.push(0);
      expect(contents[Object.keys(contents)[0]]).to.be(0);
    });

    it('should push multiple elements to array on successive calls', () => {
      for (let i = 0; i < 5; i++) {
        array.push(i);
      }
      Object.keys(contents).forEach((key, i) => {
        expect(contents[key]).to.be(i);
      });
    });
  });

  describe('pop', () => {
    it('should be a function', () => {
      expect(array.pop).to.be.a('function');
    });

    it('should remove and return one element from end of array', () => {
      array.push(0);
      expect(array.pop()).to.eql(0);
    });

    it('should remove and return multiple elements on successive calls', () => {
      array.push(0);
      expect(array.pop()).to.eql(0);
      array.push(1);
      array.push(2);
      expect(array.pop()).to.eql(2);
      expect(array.pop()).to.eql(1);
    });

    it('should not break after being called on empty array', () => {
      expect(array.pop()).to.eql(undefined);
      array.push(1);
      expect(array.pop()).to.eql(1);
      expect(array.pop()).to.eql(undefined);
    });
  });

  describe('unshift', () => {
    it('should be a function', () => {
      expect(array.unshift).to.be.a('function');
    });

    it('should unshift element to array', () => {
      array.unshift(0);
      expect(contents[Object.keys(contents)[0]]).to.be(0);
    });

    it('should unshift multiple elements to array on successive calls', () => {
      for (let i = 4; i >= 0; i--) {
        array.unshift(i);
      }

      Object.keys(contents).forEach((key, i) => {
        expect(contents[key]).to.be(i);
      });
    });
  });

  describe('shift', () => {
    it('should be a function', () => {
      expect(array.shift).to.be.a('function');
    });

    it('should remove and return one element from beginning of array', () => {
      array.push(0);
      expect(array.shift()).to.eql(0);
    });

    it('should remove and return multiple elements on successive calls', () => {
      array.push(0);
      expect(array.shift()).to.eql(0);
      array.push(1);
      array.push(2);
      expect(array.shift()).to.eql(1);
      expect(array.shift()).to.eql(2);
    });

    it('should not break after being called on empty array', () => {
      expect(array.shift()).to.eql(undefined);
      array.push(1);
      expect(array.shift()).to.eql(1);
      expect(array.shift()).to.eql(undefined);
    });
  });

  describe('length', () => {
    it('should update accurately with function calls', () => {
      array.push(0);
      expect(array.length).to.be(1);
      array.push(1);
      expect(array.length).to.be(2);
      array.unshift(2);
      expect(array.length).to.be(3);
      array.pop();
      expect(array.length).to.be(2);
      array.shift();
      array.shift();
      expect(array.length).to.be(0);
      array.shift();
      expect(array.length).to.be(0);
      array.pop();
      expect(array.length).to.be(0);
      array.unshift(4);
      expect(array.length).to.be(1);
    });
  });
});

describe('Bonus (optional)', () => {
  let array, contents;

  beforeEach(() => {
    array = new Erray();
    contents = array.contents;
  });

  describe('multiple arguments', () => {
    it('should push to array in one call', () => {
      array.push(0, 1, 2, 3, 4);
      let keys = Object.keys(contents);
      for (let i = 0; i < 5; i++) {
        expect(contents[keys[i]]).to.be(i);
      }
    });

    it('should unshift to array in one call', () => {
      array.unshift(0, 1, 2, 3, 4);
      let keys = Object.keys(contents);
      for (let i = 0; i < 5; i++) {
        expect(contents[keys[i]]).to.be(i);
      }
    });
  })

  describe('Erray functions', () => {
    // Don't help desk this one. Think like a developer!
    it('should do one more thing real Array functions do...', () => {
      expect(array.push("2", "+", "2", "=")).to.be(4);
      expect(array.unshift("4", "*", "2", "=")).to.be(8);
    });
  })
})
