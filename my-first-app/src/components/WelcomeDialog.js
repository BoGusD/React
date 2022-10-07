import React from "react";
import Dialog from "./Dialog";

export default function WelcomeDialog(props) {
  return (
    <>
      <Dialog
        color="orange"
        title="Welcome to summoner's lift"
        message="소환사의 협곡에
    오신 것을 환영합니다."
      />
      <button onClick={() => alert(props.alertMessage)}>{props.content}</button>
    </>
  );
}
