function numberOfHalves(n) {
    var count = 0;
    while (n > 1) {
      n /= 2;
      count++;
    }
    return count;
  }