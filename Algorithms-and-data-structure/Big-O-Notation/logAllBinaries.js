function logAllBinaries(n) {
    var count = 0;
    var lastNum = "1".repeat(n);
    while (count.toString(2) !== lastNum) {
      console.log(count.toString(2).padStart(n, "0"));
      count++;
    }
    console.log(lastNum);
  }