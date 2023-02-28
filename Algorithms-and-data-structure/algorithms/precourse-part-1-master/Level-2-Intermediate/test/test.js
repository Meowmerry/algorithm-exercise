describe('Intermediate Level Challenges...', function() {

  describe('returnOdds', function() {
    it('should return odd numbers from an array', function() {
      expect(returnOdds([4, 7, 8, 3, 4, 6])).to.eql([7, 3]);
      expect(returnOdds([1, 9, 8, 3, 5])).to.eql([1, 9, 3, 5]);
    });
  });

  describe('returnEvens', function() {
    it('should return even numbers from an array', function() {
      expect(returnEvens([4, 7, 8, 3, 4, 6])).to.eql([4, 8, 4, 6]);
      expect(returnEvens([1, 9, 8, 3, 5])).to.eql([8]);
    });
  });

  describe('findMax', function() {
    it('should find max number in an array', function() {
      expect(findMax([13, 1, 6, 100])).to.eql(100);
    });
    it('should not be fooled by negative numbers', function() {
      expect(findMax([13, 1, 6, -100])).to.eql(13);
    });
  });

  describe('trim', function() {
    it('should remove leading white spaces', function() {
      expect(trim('hello')).to.eql('hello');
      expect(trim(' hello')).to.eql('hello');
      expect(trim('  hello')).to.eql('hello');
      expect(trim('   hello')).to.eql('hello');
    });

    it('should remove trailing white spaces', function() {
      expect(trim('hello')).to.eql('hello');
      expect(trim('hello ')).to.eql('hello');
      expect(trim('hello  ')).to.eql('hello');
      expect(trim('hello    ')).to.eql('hello');
    });

    it('should remove both', function() {
      expect(trim('  hello  ')).to.eql('hello');
    });

    it('should not remove space in the middle', function() {
      expect(trim('keep the space in the middle  ')).to.eql('keep the space in the middle');
    });
  });

  describe('createArray', function() {
    beforeEach(function() {
      array = new createArray();
    });
    it('should have push and pop method', function() {
      expect(array).to.have.property('push');
      expect(array.push).to.be.a('function');
      expect(array).to.have.property('pop');
      expect(array.pop).to.be.a('function');
    });

    it('should push and pop single value', function() {
      array.push(0);
      expect(array.pop()).to.be(0);
    });

    it('should push and pop multiple values', function() {
      array.push(0);
      array.push(1);
      array.push(2);
      expect(array.pop()).to.be(2);
      expect(array.pop()).to.be(1);
      expect(array.pop()).to.be(0);
    });

    it('should have shift and unshift method', function() {
      expect(array).to.have.property('shift');
      expect(array.shift).to.be.a('function');
      expect(array).to.have.property('unshift');
      expect(array.unshift).to.be.a('function');
    });

    it('should unshift and shift single value', function() {
      array.unshift(0);
      expect(array.shift()).to.be(0);
    });

    it('should unshift and shift multiple values', function() {
      array.unshift(0);
      array.unshift(1);
      array.unshift(2);
      expect(array.shift()).to.be(2);
      expect(array.shift()).to.be(1);
      expect(array.shift()).to.be(0);
    });
  });
});