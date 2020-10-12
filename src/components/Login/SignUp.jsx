import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import styles from './signUp.module.css'

const SignUp = ({ authService,handleNickName }) => {
  const [signMail, setSignMail] = useState("");
  const [signPw, setSignPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const history = useHistory();
  const handleId = (e) => {
    setSignMail(e.target.value);
    console.log(signMail);
  };
  const handlePw = (e) => {
    setSignPw(e.target.value);

  };
  const handleCheckPw = (e) => {
    setCheckPw(e.target.value);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const handleSubmit = (signMail, signPw) => {
      if (signPw !== checkPw) {
        alert("비밀번호가 맞지 않습니다.");
      } else if (signPw.length <= 6 || checkPw.length <= 6) {
        alert("비밀번호 길이는 6자 이상으로 해주세요");
      } else {
        authService.emailSignup(signMail, signPw).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
      }
    };
    handleSubmit(signMail, signPw);
  };

  const goBack = () => {
    history.push("/");
  };
  return (
    <div className={styles.signUp}>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <p>이메일</p>
        <input type="text" onChange={handleId} />
        <p>패스워드</p>
        <input type="password" onChange={handlePw} />
        <p>비밀번호 확인</p>
        <input type="password" onChange={handleCheckPw} />
        <p>닉네임 설정</p>
        <input type="text" onChange={handleNickName} />
        <input type="submit"></input>
      </form>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
};

export default SignUp;
