import * as React from 'react';
import styles from "../styles/SubHead.module.scss"

export default function SubHeader(props) {
    return (
        <div className={styles.subHeadContainer}>
            {
                props.topicArray.map((topic, key) => {
                    return <div className={styles.topicItem} key={key}>
                        <h2>{topic}</h2>
                    </div>
                })
            }
        </div>
    )
};