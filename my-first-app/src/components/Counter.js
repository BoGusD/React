import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClickEnter = () => {
    setCount(count + 1);
  };
  const onClickDown = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickEnter}>+1</button>
      <button onClick={onClickDown}>-1</button>
    </div>
  );
}
