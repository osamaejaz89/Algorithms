// kaprekar_constant.ts

function kaprekarNumbers(p: number, q: number): void {
  // Write your code here
    let result: any = []
    for (let i = p; i <= q; i++) {
        
       const squareString = (i * i).toString();
       const num1 = squareString.substring(0, squareString.length / 2);
       const num2 = squareString.substring(
         squareString.length / 2,
         squareString.length
       );
        
        
        const sum = parseInt(num1) + parseInt(num2);
        
        if (sum === i || i === 1) {
            result.push(i);
        }

        
    }
if (result.length === 0) {
  console.log("INVALID RANGE");
} else {
  console.log(...result);
}
    

}

kaprekarNumbers(400, 700);