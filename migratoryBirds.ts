function migratoryBirds(arr: number[]): number {
  // Write your code here

  let max = 0;
  let maxIndex = 0;
  const counts: any = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      maxIndex = Number(key);
    }
  }
  return maxIndex;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
