function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let billActual;

  billActual = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;

  if (billActual === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - billActual);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);
