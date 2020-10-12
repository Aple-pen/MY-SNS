import React from 'react';
import styles from './profile.module.css'
const Profile = ({nickName,email,profileImg}) => {
    return(
        <div className={styles.user}>
        {profileImg 
            ? <img className = {styles.mainImg} src={profileImg} alt="profile 사진"/>
            : <img className={styles.mainImg} src = "./logo192.png" alt="profile 사진" />}
        {email 
            ? <p className={styles.userName}>{email}</p> 
            :<p className={styles.userName}>{nickName}</p>}
        </div>
    )
}

export default Profile;