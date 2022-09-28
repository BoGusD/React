import React, { component } from "react";

class ClassState extends React.Component {
  //현재 버전

  state = {
    message: "",
  };
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message: "",
  //     };

  render() {
    const { message } = this.state;
    const onClickEnter = () => {
      this.setstate({ message: "안녕하세요" });
    };
    const onClickLeave = () => {
      this.setstate({ message: "안녕히 가세요" });
    };
    return (
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default ClassState;
