function howManyGames(p: number, d: number, m: number, s: number): number {
  // Return the number of games you can buy
  let count = 0;

    while (s >= p) {
        s -= p;
        p = Math.max(p - d, m);
        count += 1;
    }
  
  return count;
}

console.log(howManyGames(20, 3, 6, 85));
