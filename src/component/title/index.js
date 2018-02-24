/****
 * 公用的title组件
 * 传入title的文本即可
 * *****/
import React from 'react';
import styles from './index.less'

const Title = ({ title })=>{

    return(
        <div className={styles.content}>
            <i></i>
            <span className={styles.text}>{title}</span>
        </div>
    )
}

export default Title