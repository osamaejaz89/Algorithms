var timeObject: any = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
};

function timeInWords(h: number, m: number): string {
  // Write your code here

  let str: string = "";
  if (m === 0) {
    str = timeObject[h] + ` o' clock`;
  } else if (m === 1) {
    str = "one minute past " + timeObject[h];
  } else if (m === 15) {
    str = "quarter past " + timeObject[h];
  } else if (m === 30) {
    str = "half past " + timeObject[h];
  } else if (m === 45) {
    str = "quarter to " + timeObject[h + 1];
  } else if (m === 59) {
    str = "one minute to " + timeObject[h + 1];
    if (str.slice(-8) === "thirteen") {
      str = timeObject[60 - m] + " minutes to " + timeObject[1];
    }
  } else if (m > 1 && m < 30) {
    str = timeObject[m] + " minutes past " + timeObject[h];
  } else if (m > 30 && m < 59) {
    str = timeObject[60 - m] + " minutes to " + timeObject[h + 1];
  } else {
    str = "invalid";
  }
  return str;
}

console.log(timeInWords(6, 35));

var strr = "one minute to thirteen";
console.log(strr.slice(-8));
