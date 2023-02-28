function totalNumberOfHalves(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
      total += numberOfHalves(n);
    }
    return total;
  }