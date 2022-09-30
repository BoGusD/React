import { useEffect, useState, useRef } from "react";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력해 주세요!");
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log("✔버튼 클릭");
    setCount(count + 1);
  };
  const onInputChange = () => {
    console.log("🛩키 입력");
    // dom 요소를 참조하기 위해 쓰는부분인지 current요소만을 참조하고 싶은건지 확인필요
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log("🤑 렌더링 할 때마다 실행되는 useEffect");
  });

  useEffect(() => {
    console.log("🛩둘다 보고 있는 useEffect");
    // 두번째 인자는 무조건 배열로
  }, [count, text]);

  useEffect(() => {
    console.log("🚲 최초 랜더링시에만 실행되는 useEffect");
  }, []);

  //   useEffect(() => {
  //     console.log("🛩키 입력 할 때마다 실행되는 useEffect");
  //     // 두번째 인자는 무조건 배열로
  //   }, [text]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange}></input>
      <h1>{text}</h1>
    </>
  );
}
