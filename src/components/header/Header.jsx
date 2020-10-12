import React from "react";
import Profile from "../profile/Profile";
import styles from "./header.module.css";
const Header = ({ onLogout,nickName,email,profileImg }) => {
  const buttonStyle = {
    textDecoration : "none"
  }
  return (
    <header className={styles.header}>
      <a  style={buttonStyle}href="/home"><h1 className={styles.headerText}>MySNS</h1></a>
      {onLogout && (
        <div>
        <Profile nickName={nickName} email={email} profileImg={profileImg}/>
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
        </div>
      )}
    </header> 
  );
};

export default Header;
