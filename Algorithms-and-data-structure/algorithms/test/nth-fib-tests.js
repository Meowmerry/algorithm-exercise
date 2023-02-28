describe('nthFibonacci', () => {

  it('should return nth fibonacci number', () => {
    expect(nthFibonacci(0)).to.eql(0);
    expect(nthFibonacci(1)).to.eql(1);
    expect(nthFibonacci(2)).to.eql(1);
    expect(nthFibonacci(3)).to.eql(2);
    expect(nthFibonacci(4)).to.eql(3);
  });

  it('should work for big numbers', () => {
    expect(nthFibonacci(10)).to.eql(55);
    expect(nthFibonacci(13)).to.eql(233);
    expect(nthFibonacci(20)).to.eql(6765);
  });
});



