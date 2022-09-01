var calPoints = function (ops) {
  var result = 0;
  let score = [];

  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i])) {
      score.push(parseInt(ops[i]));
    } else if (ops[i] == "C") {
      score.pop();
    } else if (ops[i] == "D") {
      score.push(parseInt(score[score.length - 1]) * 2);
    } else if (ops[i] == "+") {
      score.push(
        parseInt(score[score.length - 1] + parseInt(score[score.length - 2]))
      );
    }
  }
  result = score.reduce((a, b) => a + b, 0);
  console.log(result);
};

calPoints(["5", "2", "C", "D", "+"]);