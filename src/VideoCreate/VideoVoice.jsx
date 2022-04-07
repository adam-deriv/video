import styles from './VideoVoice.module.scss';

export default function VideoVoice() {
    return(
        <div className={styles.videoVoiceContainer}>
            <div className={styles.videoVoice}>
                <div className={styles.play}></div>
                <div className={styles.audio}>
                    <div className={styles.title}>Asian</div>
                    <div className={styles.audioBar}></div>
                </div>
            </div>
            <div className={styles.videoVoice}>
                <div className={styles.play}></div>
                <div className={styles.audio}>
                    <div className={styles.title}>British</div>
                    <div className={styles.audioBar}></div>
                </div>
            </div>
            <div className={styles.videoVoice}>
                <div className={styles.play}></div>
                <div className={styles.audio}>
                    <div className={styles.title}>American</div>
                    <div className={styles.audioBar}></div>
                </div>
            </div>
        </div>
    )
}