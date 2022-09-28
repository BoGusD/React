import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RootDiv = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const MyA = styled.a`
  color: #61dafb;
`;

export default function Logo() {
  return (
    <RootDiv className="App">
      <AppHeader className="AppHeader">
        <AppLogo src={logo} alt="app" />{" "}
        <p>
          Edit <code>강지훈구데기</code> and save to reload.{" "}
        </p>{" "}
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </MyA>{" "}
      </AppHeader>{" "}
    </RootDiv>
  );
}
