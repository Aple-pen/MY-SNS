import React from "react";
import styles from "./writeBox.module.css";
const WriteBox = (props) => {
  return (
    <div className={styles.WriteBox}>
      <div className={styles.header}>
        <p>게시물 만들기</p>
      </div>
      <div className={styles.mainBox}>
        <p> 오늘 무슨일이 있었나요?</p>
      </div>
    </div>
  );
};

export default WriteBox;
