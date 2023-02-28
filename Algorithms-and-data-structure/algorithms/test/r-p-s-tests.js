describe('rockPaperScissors', () => {
  it('should return all combinations of results for 0 games', () => {
    expect(rockPaperScissors(0)).to.eql([]);
  });

  it('should return all combinations of results for 1 game', () => {
    const actual = rockPaperScissors(1);
    const expected = [['rock'],['paper'],['scissors']];
    expect(actual).to.have.length(expected.length);
    actual.sort();
    expected.sort();
    expect(actual).to.eql(expected);
  });

  it('should return all combinations of results for 2 games', () => {
    const actual = rockPaperScissors(2);
    const expected = [['rock','rock'],['rock','paper'],['rock','scissors'],['paper','paper'],['paper','scissors'],['paper','rock'],['scissors','scissors'],['scissors','paper'],['scissors','rock']];
    expect(actual).to.have.length(expected.length);
    actual.sort();
    expected.sort();
    expect(actual).to.eql(expected);
  });

 });



