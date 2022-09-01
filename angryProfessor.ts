function angryProfessor(k: number, a: number[]): string {
  // Write your code here
    let onTime = 0;
    for (const num of a) {
        if (num <= 0) {
            onTime++;
        }
    }
    if (onTime >= k) {
        return 'NO';
    }
    return 'YES';
}

console.log(angryProfessor(2, [-1, -3, 4, 2]));

