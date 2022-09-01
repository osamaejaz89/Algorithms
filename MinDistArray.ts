function minimumDistances(a: number[]): number {
  // Write your code here

    let minValue = Number.MAX_VALUE;
    
  let map: any = {};

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      let diff = i - (map[a[i]] - 1);
      if (diff < minValue) {
        minValue = diff;
      }
      map[a[i]] = i + 1;
    } else {
      map[a[i]] = i + 1;
    }
  }
    if (minValue === Number.MAX_VALUE) 
        return -1;
    
  return minValue

}


console.log(minimumDistances([1, 2, 3, 4, 10]));
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
