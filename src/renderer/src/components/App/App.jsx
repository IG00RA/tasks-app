import TopBar from '../TopBar/TopBar'
import styles from './App.module.css'
import Main from '../Main/Main'

function App() {
  return (
    <>
      <TopBar />
      <div className={styles.app_wrap}>
        <span className={styles.back_text}>To do, or not to do, that is the question</span>
        <Main />
      </div>
    </>
  )
}

export default App
