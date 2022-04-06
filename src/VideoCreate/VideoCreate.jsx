import { appService } from '../appService'
import styles from'./VideoCreate.module.scss'

export default function VideoCreate() { 
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">Saying Hi to my customers</div>
                <div className="topBarRight">
                    <button className="buttonAppSecondary" onClick={() => appService.send('GO_BROWSE')}>Cancel</button>
                    <button className="buttonApp" onClick={() => appService.send('GO_BROWSE')}>Save</button>
                </div>
            </div>
            <div className={styles.videoPreviewWrapper}>
                <div className={styles.videoPreview}>
                    <div className={styles.videoPreviewImage} />
                    <div className={styles.videoPreviewDescription}>
                        {/* textarea */}
                        <textarea className={styles.videoPreviewDescriptionTextarea}
                        placeholder="Type or paste your videoscript here. You can also request a translation of 
                        an English script to any of 27 other languages" />
                        
                        <div className={styles.videoPreviewButtonWrapper}>
                            <button className={styles.videoPreviewListenButton}>Listen</button>
                        </div>
                    </div>
                </div>
                <div className={styles.videoPreviewOptions}>
                    <div className="accountTabs">
                        <span className="accountTab" onClick={() => appService.send('GO_ACTOR')}>
                            <div className={styles.actor}>Actor</div>
                        </span>
                        <span className="accountTab" onClick={() => appService.send('GO_VOICE')}>
                            <div className={styles.voice}>Voice</div>
                        </span>
                        <span className="accountTab" onClick={() => appService.send('GO_ALIGNMENT')}>
                            <div className={styles.alignment}>Alignment</div>
                        </span>
                        <span className="accountTab background" onClick={() => appService.send('GO_BACKGROUND')}>
                            <div className={styles.background}>Background</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}