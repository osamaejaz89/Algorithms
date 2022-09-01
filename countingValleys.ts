function countingValleys(steps: number, path: string): number {
  // Write your code here

  let valleys = 0;
  let level = 1;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      level--;
    } else {
      level++;
    }

    if (level === 0 && path[i] === "D") {
      valleys++;
    }
  }
  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
