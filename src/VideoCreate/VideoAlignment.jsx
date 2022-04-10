import { useSelector } from '@xstate/react';
import { appService } from '../appService';
import styles from './VideoAlignment.module.scss';

const isRightSelectedSelector = (state) => state.matches('video.actor.alignment.right');
const isLeftSelectedSelector = (state) => state.matches('video.actor.alignment.left');
const isCenterSelectedSelector = (state) => state.matches('video.actor.alignment.center');

export default function VideoAlignment() {
    const isRightSelected = useSelector(appService, isRightSelectedSelector);
    const isLeftSelected = useSelector(appService, isLeftSelectedSelector);
    const isCenterSelected = useSelector(appService, isCenterSelectedSelector);
    return (
        <div className={styles.videoAlignmentContainer}>
            <div className={isLeftSelected ? styles.videoAlignmentSelected : styles.videoAlignment}
                onClick={() => appService.send('LEFT')}>Left</div>
            <div className={isCenterSelected ? styles.videoAlignmentSelected : styles.videoAlignment}
                onClick={() => appService.send('CENTER')}>Center</div>
            <div className={isRightSelected ? styles.videoAlignmentSelected : styles.videoAlignment}
                onClick={() => appService.send('RIGHT')}>Right</div>
        </div>
    )
}