import styles from './TopBar.module.css'

function TopBar() {
  const handleOnClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }
  const handleOnMin = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <>
      <div className={styles.bar_wrap_drag} style={{ WebkitAppRegion: 'drag' }}></div>
      <div className={styles.bar_wrap}>
        <div className={styles.buttons_wrap}>
          <button className={styles.button} onClick={handleOnMin} type="button">
            &#x1F5D5;
          </button>
          <button className={styles.button} onClick={handleOnClose} type="button">
            &#x58;
          </button>
        </div>
      </div>
    </>
  )
}

export default TopBar
