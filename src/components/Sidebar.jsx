import { appService } from '../appService';
import styles from './Sidebar.module.scss';

export default function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidbarAppLogo} onClick={() => appService.send('GO_BROWSE')}/>
      <div className={styles.sidebarAppCreate} onClick={() => appService.send('GO_ACTOR')}/>
      <div className={styles.sidebarAppBrowse} onClick={() => appService.send('GO_BROWSE')}/>
      <div className={styles.sidebarAppProfile} onClick={() => appService.send('GO_ACCOUNT')}/>
    </div>
  )
}
