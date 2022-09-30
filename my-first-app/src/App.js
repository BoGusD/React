import MainHeader from "./components/MainHeader";
import ImgHeader from "./components/ImgComponent";
import BtnTONaver from "./components/BtnTONaver.js";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import StatePratice from "./components/StatePratice";
import Counter from "./components/Counter";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObj from "./components/ChangeObj";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import Logo from "./components/Logo";
import ConditionalRender from "./components/ConditionalRender";
import PraticeOne from "./components/PracticeOne";
import PraticeTwo from "./components/PracticeTwo";
import TestRef from "./components/TestRef";
import ChangeFocus from "./components/ChangeFocus";
import ReactFragment from "./components/ReactFragement";
import TableColumn from "./components/TableColumn";
import Comparing from "./components/Comparing";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PraticeTimer from "./components/PraticeTimer";
import { useEffect, useRef, useState } from "react";
import TestUseMemo from "./components/TestUseMemo";
import UsingUseMemo from "./components/UsingUseMemo";
// import "./App.css";

function App() {
  // const [show, setShow] = useState(false);
  // const changeFocus = useRef();
  // useEffect(() => {
  //   changeFocus.current.focus();
  // }, []);

  return (
    <div className="App">
      {/* <TestUseMemo /> */}
      {/* 무한 랜더링을 피하기 위한 화살표함수 사용
      {show && <PraticeTimer />}
      <button ref={changeFocus} onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button> */}
      <UsingUseMemo />
    </div>
  );
}

export default App;
