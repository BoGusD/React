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
import Where from "./components/Where";
import Image from "./components/Image";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import WelcomeDialogBtn from "./components/WelcomeDialogBtn";
import FancyBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";
import Profile from "./components/Profile";
import Board from "./components/Board";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 실제적으로 routing 역할을 해주는 components */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
