import React, { useRef,useState } from "react";
import styles from './input_picture.module.css'


const Input_Picture = ({imageUploader,name,onFileChange}) => {
  const [loading,setLoading]=useState(false)
  const inputRef = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async(e)=>{
    setLoading(true)
    const uploaded = await imageUploader.upload(e.target.files[0])
    setLoading(false)
    onFileChange({
      name : uploaded.original_filename,
      url : uploaded.url
    })
  }
  return (
    <div className={styles.container}>
      <input
      className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange = {onChange}
      />
      <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} name = {name} onClick={onButtonClick}>{name||"사진"}</button>
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default Input_Picture;
