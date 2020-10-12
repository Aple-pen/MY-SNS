import React, { useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/Maker";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import styles from "./App.module.css";

const App = ({ FileInput, authService,database }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName,setNickName] = useState("");  


  const handleNickName = (e)=>{
    setNickName(e.target.value);
  }

  const handleMail = (e) => {
    setEmail(e.target.value)
  };
  const handlePW = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} database={database} handleMail={handleMail} handlePW={handlePW} email={email} password={password}/>
          </Route>
          <Route path="/home" onLogout={authService.onLogout}>
            <Maker
              authService={authService}
              FileInput={FileInput}
              database={database}
              email={email}
            />
          </Route>
          <Route path="/signup">
            <SignUp authService={authService} handleNickName={handleNickName}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
