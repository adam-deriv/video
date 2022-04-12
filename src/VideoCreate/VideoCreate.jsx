import { useSelector } from '@xstate/react'
import { Suspense } from 'react';
import { appService } from '../appService'
import Loading from '../components/Loading';
import VideoActors from './VideoActors';
import VideoAlignment from './VideoAlignment';
import VideoBackground from './VideoBackground';
import styles from'./VideoCreate.module.scss'
import VideoVoice from './VideoVoice';

export default function VideoCreate() { 
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">Saying Hi to my customers</div>
                <div className="topBarRight">
                    <div className={styles.topSecondaryButton}><button className="buttonAppSecondary" onClick={() => appService.send('GO_BROWSE')}>Cancel</button></div>
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
                            <button className="buttonAppSecondary">Listen</button>
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
                    <VideoCreateOptions />
                </div>
            </div>
        </div>
    )
}

const isVideoAccountCreateActorSelector = (state) => state.matches('video.actor.actor');
const isVideoAccountCreateVoiceSelector = (state) => state.matches('video.actor.voice');
const isVideoAccountCreateAlignmentSelector = (state) => state.matches('video.actor.alignment');
const isVideoAccountCreateBackgroundSelector = (state) => state.matches('video.actor.background');


function VideoCreateOptions() {
    const isVideoAccountCreateActor = useSelector(appService, isVideoAccountCreateActorSelector);
    const isVideoAccountCreateVoice = useSelector(appService, isVideoAccountCreateVoiceSelector);
    const isVideoAccountCreateAlignment = useSelector(appService, isVideoAccountCreateAlignmentSelector);
    const isVideoAccountCreateBackground = useSelector(appService, isVideoAccountCreateBackgroundSelector);
    if (isVideoAccountCreateActor) return (
        <Suspense fallback={<Loading />}><VideoActors /></Suspense>
    )
    if (isVideoAccountCreateVoice) return (
        <Suspense fallback={<Loading />}><VideoVoice /></Suspense>
    )
    if (isVideoAccountCreateAlignment) return (
        <Suspense fallback={<Loading />}><VideoAlignment /></Suspense>
    )
    if (isVideoAccountCreateBackground) return (
        <Suspense fallback={<Loading />}><VideoBackground /></Suspense>
    )
    return <Loading />
}