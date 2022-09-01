var str = "aba";
var len = 10;
var temp = "";
var count = 0;
let occurances = str.split("a").length - 1;
console.log(occurances);

let max = Math.floor(len / str.length);
console.log(max);

let totalAs = occurances * max;
console.log(totalAs);

totalAs += str.slice(0, len % str.length).split("a").length - 1;
console.log(totalAs);


