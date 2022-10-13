function solution(dartResult) {
  let sum = 0;
  let answer= [];
  let num=0;

  
  for(let i =0; i<dartResult.length; i++){
      if(dartResult(i)>=0 && dartResult(i)<=9){
          num ++
      }
      else if(dartResult(i)=='S'){
         answer.push(num)
      } else if(dartResult(i)=='D'){
          answer.push(Math.pow(num,2))
      }else if(dartResult(i)=='T'){
            answer.push(Math.pow(num,3))
      }else if(dartResult(i)=='*'){
         answer.push(answer(i-1))*
      }else if(dartResult(i)=="#"){
        answer.push(answer(i-1))*(-1)
      }
} for(let i=0; i<answer.length; i++){
  sum+=answer;
}

  return sum;
}