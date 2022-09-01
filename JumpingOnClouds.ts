function jumpingOnClouds(c: number[]): number {
  // Write your code here
  var current;
  var jumps = 0;

  let i = 0;

  while (i < c.length) {
    current = c[i];
    if (i + 2 < c.length && c[i + 2] == 0) {
      i += 2;
      jumps += 1;
    } else if (i + 1 < c.length && c[i + 1] == 0) {
      i += 1;
      jumps += 1;
    } else i += 1;
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
