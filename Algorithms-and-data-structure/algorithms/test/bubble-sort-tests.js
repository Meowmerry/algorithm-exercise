describe('bubbleSort', () => {
  it('should sort numbers', () => {
    for (let i = 0; i < 10; i++) {
      const smallArray = makeList(100);
      const clone = smallArray.slice();
      expect(bubbleSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', () => {
    const largeArray = makeList(10000);
    const clone = largeArray.slice();
    expect(bubbleSort(clone)).to.eql(largeArray.sort(inc));
  });

  it('should handle a very, very large but already sorted arrays', () => {
    const ultraArray = [];
    for (let i = 0; i < 10000000; i++) {
      ultraArray.push(i);
    }
    bubbleSort(ultraArray);
    expect(ultraArray[2000]).to.eql(2000);
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