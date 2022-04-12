import styles from './VideoBackground.module.scss';

export default function VideoBackground() {
    return (
        <div className={styles.videoBackground}>
            <div className={styles.accordion}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        <div className={styles.titleText}>Images</div>
                        <div className={styles.chevron} />
                    </div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        <div className={styles.titleText}>Solid Colours</div>
                        <div className={styles.chevron} />
                    </div>
                    <div className={styles.content}>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        <div className={styles.titleText}>Videos</div>
                        <div className={styles.chevron} />
                    </div>
                    <div className={styles.content}>
                    </div>
                </div>
            </div>
        </div>
    )
}