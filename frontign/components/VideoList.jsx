import * as React from 'react';
import styles from "../styles/VideoList.module.scss"

export default function VideoList(props) {
    return (
        <div className={styles.videoListCont}>
            {
                props.videoArray.map((video, key) => {
                    return <div className={styles.topicItem} key={key}>
                        <h3>{video}</h3>
                    </div>
                })
            }
        </div>
    )
};