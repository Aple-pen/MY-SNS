import React, { useEffect, useState,useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import styles from "./maker.module.css";

import Content from "../content/Content";
const Maker = ({ FileInput, authService,database }) => {
  const [data, setData] = useState({});
  const [userId, setUserId] = useState("");
  const [email,setEmail] = useState("")
  const [profileImg,setProfileImg]=useState("")
  const [displayName,setDisplayName] = useState("")
  const history = useHistory();
  
  function isEmptyObject(param) {
    return Object.keys(param).length === 0;
  }

  const onLogout = () => {
    authService.onLogout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = database.syncData(userId, (datas) => {
      
      setData(datas)
    });
    return () => stopSync();
  },[userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setEmail(user.email);
        setProfileImg(user.photoURL);
        setDisplayName(user.displayName)
      } else {
        history.push("/");
      }
    });
  });

  const createOrUpdate = (value) => {
    setData((data) => {
      const updated = { ...data };
      updated[value.id] = value;
      return updated;
    });
    database.saveData(userId,value)
  };


  const setRemove = useCallback((value)=>{
    setData((data) => {
      const updated = { ...data };
      delete updated[data.id];
      console.log(data)
      return updated;
    });
    database.removeData(userId, value);

  },[data])

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} email={email} profileImg={profileImg}/>
      <div className={styles.content}>
        <Content
          FileInput={FileInput}
          data={data}
          createOrUpdate={createOrUpdate}
          setRemove = {setRemove}
          isEmptyObject={isEmptyObject}
          profileImg={profileImg}
          displayName={displayName}
        />
        </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Maker;
