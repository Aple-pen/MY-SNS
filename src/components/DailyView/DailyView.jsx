import React, { useRef } from "react";
import styles from "./dailyView.module.css";
import RemoveButton from "./RemoveButton";
import Comment from '../comment/Comment'

//from content
const DailyView = ({ data,setRemove,createOrUpdate,profileImg,displayName }) => {

  const textRef = useRef();
  const onsubmit=()=>{
    if(window.confirm("정말로 삭제하시겠습니까?") ===true)
      setRemove(data)
    else
      return;
  }
 const commentArray = []
  const commentUpdate = (e)=>{
    e.preventDefault();
    const update = {...data}
    update.comment.push({
      id:Date.now(),
      comment : textRef.current.value || ""})
    createOrUpdate(update)
    textRef.current.value = ""
  }

  for(var i=1;i<data.comment.length;i++){
    commentArray.push(data.comment[i])
  }

  return (
    <div className={styles.dailyView}>
      <li className={styles.li}>
      <div className={styles.buttonPosition}>
      <RemoveButton setRemove={onsubmit}/>
      </div>
      <div className={styles.profile}>
        <img className={styles.profileImg} src={profileImg} alt="profileImage"/>
        <p className={styles.id}>{displayName}</p>
      </div>
        <div className={styles.img}>
        {data.fileURL && (
          <img className={styles.pic} src={data.fileURL} alt="image file" />
        )}
        </div>
        <p className={styles.text}>{data.text}</p>
        <form className={styles.form} onSubmit={commentUpdate}>
          <input className={styles.commentText} ref={textRef} type="text" placeholder="command"/>
          <button className={styles.button} type="submit">올리기 </button>
        </form>
        <hr />
        <div className={styles.commantBox}>
          <details>
            <summary>댓글</summary>
            {commentArray.map(value=>(
              <Comment key={value.id} 
                      comment={value.comment} 
                      profileImg={profileImg} 
                      displayName={displayName}/>
            ))}
          <hr/>
          </details>
        </div>
      </li>
    </div>
  );
};
export default DailyView;
