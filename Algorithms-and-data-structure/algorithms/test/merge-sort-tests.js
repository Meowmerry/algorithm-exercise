describe('mergeSort', () => {
  it('should sort numbers', () => {
    for (let i = 0; i < 10; i++) {
      const smallArray = makeList(100);
      const clone = smallArray.slice();
      expect(mergeSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', () => {
    const largeArray = makeList(10000);
    const clone = largeArray.slice();
    expect(mergeSort(clone)).to.eql(largeArray.sort(inc));
  });

});

function makeList(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random() * num));
  }
  return arr;
}

function inc(a, b) {
  return a - b;
}
