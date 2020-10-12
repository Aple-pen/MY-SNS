import React from 'react';
import styles from './comment.module.css'

const Comment = ({comment,profileImg,displayName}) => {
    return(
        <div className={styles.comment}>
            <img className={styles.img} src={profileImg} alt="profileImg"/>
            <p className={styles.id}>{displayName} : </p>
            <p className={styles.text}>{comment}</p>
        </div>
    )
}

export default Comment;