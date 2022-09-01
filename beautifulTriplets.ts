function beautifulTriplets(d: number, arr: number[]): number {
  // Write your code here
  let count = 0;
    let num;
    
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];

    if (arr.includes(num + d) && arr.includes(num + 2 * d)) {
      count += 1;
    }
  }
  return count;
}

console.log(beautifulTriplets(3, [1 ,6 ,7 ,7, 8, 10, 12, 13, 14, 19]));
