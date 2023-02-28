describe('nPaths', () => {
  it('should calculate paths for small board', () => {
    expect(nPaths(1)).to.eql(1);
    expect(nPaths(2)).to.eql(2);
    expect(nPaths(3)).to.eql(12);
  });

  xit('should calculate paths for large board', () => {
    expect(nPaths(4)).to.eql(184);
    expect(nPaths(5)).to.eql(8512);
    expect(nPaths(6)).to.eql(1262816);
  });
});
