// import React from 'react';
// import ReactDOM from 'react-dom';

function HelloWorldBtn() {
  // State값, state명령함수
  const [isClick, setClickState] = React.useState(false);
  // true일 때 이제 클릭됨
  const text = isClick ? "이제 클릭됨" : "아직 클릭 안됨";
  console.log(isClick);
  return (
    <button onClick={() => setClickState(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}

const e = React.createElement;
const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);

// Render 값이 btn에만 해당되기 때문에 웹페이지를 새로고침했을 때 버튼만 새로고침 됨 <<< virtual dom
root.render(<HelloWorldBtn />);
