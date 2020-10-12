import React, { useEffect, useState, useCallback } from "react";
import DailyInput from "../DailyInput/DailyInput";
import DailyView from "../DailyView/DailyView";
import WriteBox from "../writeBox/WriteBox";
import styles from "./content.module.css";

//from maker
const Content = ({ FileInput, data, createOrUpdate,setRemove,isEmptyObject,profileImg,displayName }) => {

  const [write, setWrite] = useState(false);
  const writeContent = useCallback(() => {
    setWrite(true);
  }, [write]);
  const goToFalse = useCallback(() => {
    setWrite(false);
  }, [write]);

  return (
    <div className={styles.mainContents}>
      <div
        className={`${styles.content} ${write && styles.write}`}
        onClick={writeContent}
      ></div>
      <div className={styles.writePeed} onClick={writeContent}>
        {write || <WriteBox />}
        {write && (
          <DailyInput
            FileInput={FileInput}
            createOrUpdate={createOrUpdate}
            goToFalse={goToFalse}
          />
        )}
      </div>
      <div className={styles.view}>
        <ul className={styles.ul}>
          {Object.keys(data).reverse().map((key) => (
            <DailyView key={key} 
                      data={data[key]} 
                      setRemove={setRemove} 
                      createOrUpdate={createOrUpdate} 
                      profileImg={profileImg} 
                      displayName={displayName}/>
          ))}
        </ul>
        {isEmptyObject(data) && <h1>로딩중...</h1>}
      </div>
    </div>  
  );
};

export default Content;
