import React, { useRef, useState } from "react";
import Button from "./Button";
import styles from "./dailyinput.module.css";

//from content

const DailyInput = ({ FileInput, createOrUpdate, goToFalse }) => {
  const textRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });


  const onFileChange = (file)=>{
    setFile({
      fileName : file.name,
      fileURL : file.url
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = {
      id: Date.now() || "",
      text: textRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
      comment : ["comment"],
    };
    if(data.text===""){
      alert("글 내용이 없습니다.");
      return;
    }
    goToFalse();
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    createOrUpdate(data);
    console.log(data);
  };

  const handleCancleButton =  (e)=>{
    e.stopPropagation();
    goToFalse();
  }

  return (
    <div className={styles.dailyInput}>
      <div className={styles.header}>
        <p>게시물 만들기</p>
        <button onClick={handleCancleButton}>취소</button>
      </div>
      <form ref={formRef} className={styles.form}>
        <textarea
          ref={textRef}
          className={styles.text}
          placeholder="오늘 무슨일이 있었나요?"
        />
        <FileInput name = {file.fileName} onFileChange={onFileChange}/>
        <Button name="게시" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default DailyInput;
