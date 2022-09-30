import { useEffect, useState, useRef } from "react";
export default function PraticeTimer() {
  const [render, setRender] = useState(0);
  const time = useRef(0);

  const changeFocus = useRef();
  useEffect(() => {
    const timer = setInterval(() => {
      time.current = time.current + 1;
      console.log(time.current);
      //함수
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  const showTime = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={showTime}>시간</button>
    </>
  );
}
