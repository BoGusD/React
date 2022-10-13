function solution(n, lost, reserve) {
  let renter = [];
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    if (reserve.includes(lost[i])) {
      const idx = reserve.indexOf(lost[i]);
      lost.splice(i, 1);
      reserve.splice(idx, 1);
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    //다 빌려줄수 있는 경우
    let index = lost.indexOf(reserve[i] - 1);
    if (index >= 0 && !renter.includes(reserve[index])) {
      renter.push(reserve[index]);
      console.log(renter);
    }
  }

  return n - (lost.length - renter.length);
}
// console.log(solution(5, [2, 4], [1, 3, 5])); //5
// console.log(solution(5, [2, 4], [3])); //4
// console.log(solution(3, [3], [1])); //2
console.log(solution(4, [2, 3], [3, 4])); //2
