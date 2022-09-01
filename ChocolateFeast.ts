function chocolateFeast(n: number, c: number, m: number): number {
  // Write your code here
  let num = 0;
  let noOfWrapers = 0;

  while (n >= c) {
    num = Math.floor(n / c);

    // n -= c;
    noOfWrapers = num;

    while (noOfWrapers >= m) {
      num += 1;
      noOfWrapers -= m;
      noOfWrapers -= 1;
    }
  }
  return num;
}

console.log(chocolateFeast(6, 2, 4));
