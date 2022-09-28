import React, { useState } from "react";

function FunctionalState() {
  // useState() << ()값에 초기값 ""을 넣어줌
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("하이");
  };
  const onClickLeave = () => {
    setMessage("빠이");
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default FunctionalState;
