function solution(answers) {
  let answer = [];
  let answera = 0;
  let answerb = 0;
  let answerc = 0;

  let c = [3, 3, 1, 1, 2];
  let b = [2, 1, 2, 3, 2];
  let a = [1, 2, 3, 4, 5];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == a[i]) answera++;
    if (answers[i] == b[i]) answerb++;
    if (answer[i] == c[i]) answerc++;
  }
  if (answera >= answerb && answera >= answerc) {
    answer.push(1);
  }
  if (answerb >= answera && answerb >= answerc) {
    answer.push(2);
  }
  if (answerc >= answera && answerc >= answerb) {
    answer.push(3);
  }

  return answer;
}
console.log(solution([1, 3, 2, 4, 2]));
