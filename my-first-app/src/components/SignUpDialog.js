import Dialog from "./Dialog";

export default function SignUpDialog(props) {
  return (
    <Dialog
      title={<button onClick={() => alert("Welcome")}>Welcome Button</button>}
      message="회원 가입이 필요한 서비스입니다."
    >
      <a href="#">회원 가입 페이지로 이동</a>
    </Dialog>
  );
}
