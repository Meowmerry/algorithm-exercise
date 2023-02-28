describe('palindrome', () => {

  it('should return true if palindrome', () => {
    expect(palindrome("eye")).to.eql(true);
    expect(palindrome("level")).to.eql(true);
    expect(palindrome("noon")).to.eql(true);
    expect(palindrome("kayak")).to.eql(true);
  });

  it('should return false if not palindrome', () => {
    expect(palindrome("jmoney")).to.eql(false);
    expect(palindrome("was")).to.eql(false);
    expect(palindrome("here")).to.eql(false);
  });

  it('should work if separated with spaces', () => {
    expect(palindrome("do not bob to nod")).to.eql(true);
    expect(palindrome("llama mall")).to.eql(true);
    expect(palindrome("loops at a spool")).to.eql(true);
  });

  it('should be case-insensitive', () => {
    expect(palindrome("Lisa Bonet ate no basil")).to.eql(true);
    expect(palindrome("Mr Owl ate my metal worm")).to.eql(true);
    expect(palindrome("UFO tofu")).to.eql(true);
  });

  it('should ignore punctuation', () => {
    expect(palindrome("A Toyota! Race fast, safe car! A Toyota!")).to.eql(true);
    expect(palindrome("flee to me, remote elf")).to.eql(true);    
  });

});

