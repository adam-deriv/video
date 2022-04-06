import styles from './VideoActors.module.scss';

export default function VideoActors() {
    return(
        <div className={styles.actorsContainer}>
            <div className={styles.actorWrapper}>
                <div className={styles.anna} />
                <div className={styles.actorName}>Anna</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.yoyo} />
                <div className={styles.actorName}>Yoyo</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.skye} />
                <div className={styles.actorName}>Skye</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.mike} />
                <div className={styles.actorName}>Mike</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.vincent} />
                <div className={styles.actorName}>Vincent</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.peter} />
                <div className={styles.actorName}>Peter</div>
            </div>
            <div className={styles.actorWrapper}>
                <div className={styles.may} />
                <div className={styles.actorName}>May</div>
            </div>
        </div>
    )
}
