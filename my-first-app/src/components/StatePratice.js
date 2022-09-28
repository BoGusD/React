import { useState } from "react";
// 함수 선언 파스칼 케이스

export default function StatePratice() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("안녕하세요");
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요");
  };
  return (
    // 하나의 요소안에 감싸져있어야함. 안 그럼 에러남
    // react안에서는 카멜케이스로 javascript 문법을 사용해야함 ex)onClick
    <div>
      <h1>{message}</h1>

      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
}
