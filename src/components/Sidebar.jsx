import styles from './Sidebar.module.scss';

export default function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidbarAppLogo} />
      <div className={styles.sidebarAppCreate} />
      <div className={styles.sidebarAppBrowse} />
      <div className={styles.sidebarAppProfile} />
    </div>
  )
}
