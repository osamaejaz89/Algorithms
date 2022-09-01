function pageCount(n: number, p: number): number {
  // Write your code here

  return Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2));
}

console.log(pageCount(5, 4));
