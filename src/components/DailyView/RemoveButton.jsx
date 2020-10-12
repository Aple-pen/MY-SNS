import React from 'react';
import styles from './removeButton.module.css'

//from DailyView
const RemoveButton = ({setRemove}) => {
    return(
        <input className={styles.button} type="button" value="x" onClick={()=>{
            setRemove();
        }} ></input>
    )
}

export default RemoveButton;