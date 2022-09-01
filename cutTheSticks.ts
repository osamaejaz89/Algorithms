function cutTheSticks(arr: number[]): number[] {
  // Write your code here
  let num:any = [];

  console.log(arr);
  
  while (arr.length > 0) {
    let min = Math.min(...arr);
    let newArr = arr.filter((x) => x > min);
    num.push(arr.length);
    arr = newArr;
    console.log(arr);
    
  }
  console.log('====================================');
  console.log(num);
  console.log('====================================');
  return num;
}

console.log(cutTheSticks([1,2,3,4,3,3,2,1]));
    