import { appService } from '../appService'
import styles from'./VideoCreate.module.scss'

export default function VideoCreate() {
    return (
        <div className="mainWrapper">
            <div className={styles.topBar}>
                <div className={styles.topBarTitle}>Saying Hi to my customers</div>
                <div className="topBarRight">
                    <button className="buttonAppSecondary" onClick={() => appService.send('GO_BROWSE')}>Cancel</button>
                    <button className="buttonApp" onClick={() => appService.send('GO_BROWSE')}>Save</button>
                </div>
            </div>
`                <div className={styles.videoItem}>
                <div className={styles.videoItemImage}>
                </div>
            </div>
        </div>
    )
}