import * as React from 'react';
import styles from "../styles/InfoForCurrentVideo.module.scss"

export default function InfoForCurrentVideo(props) {
    return (
        <div className={styles.infoCont}>
            <h1>Video Title</h1>
            <p>Video description</p>
        </div>
    )
};