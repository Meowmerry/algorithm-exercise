describe('isPrime', () => {

  it('should return true if prime', () => {
    expect(isPrime(2)).to.eql(true);
    expect(isPrime(491)).to.eql(true);
    expect(isPrime(997)).to.eql(true);
  });

  it('should return false if not prime', () => {
    expect(isPrime(1)).to.eql(false);
    expect(isPrime(123)).to.eql(false);
    expect(isPrime(777)).to.eql(false);
  });

  it('should work for big numbers', () => {
    expect(isPrime(10007)).to.eql(true);
    expect(isPrime(10001)).to.eql(false);
  });

});



