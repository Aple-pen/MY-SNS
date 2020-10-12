import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import styles from "./login.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai"


const Login = ({ authService,handleMail,handlePW,email,password}) => {

  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/home",
      state: { id: userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });


  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const handleSubmit = (email, password) => {
      authService.emailLogin(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/weak-password") {
          alert("비밀번호를 확인해주세요.");
        } else if (errorCode === "auth/invalid-email") {
          alert("메일의 형식을 확인하세요");
        } else if (errorCode === "auth/user-not-found") {
          alert("사용자를 찾을수 없습니다.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    };
    handleSubmit(email, password);
    console.log(email, password);
  };
  const onSign = () => {
    history.push("/signup");
  };
  return (
    <div>
      <Header />
      <section className={styles.login}>
        <h1>Login</h1>
        <div className={styles.emailLogin}>
          <form onSubmit={onSubmit}>
            <input type="text" onChange = {handleMail} placeholder="email" />
            <br />
            <input type="password" onChange = {handlePW} placeholder="password" />
            <input type="submit" ></input>
          </form>
        </div>
        <ul className={styles.list}>
          <li>
            <button className={styles.button} onClick={onLogin}>
              <FcGoogle className={styles.logo} />
              <p>Google</p>
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              <FaFacebook className={styles.logo} />
              <p>Facebook</p>
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              <AiFillGithub className={styles.logo} />
              <p>Github</p>
            </button>
          </li>
        </ul>
        <button onClick={onSign}>회원가입</button>
      </section>
    </div>
  );
};

export default Login;
