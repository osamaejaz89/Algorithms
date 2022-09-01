function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here


    if ((v1 > v2) && ((x2 - x1) % (v2 - v1)) === 0) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(kangaroo(0, 3, 4, 2));
