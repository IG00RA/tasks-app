import Button from '@mui/material/Button'
import TopBar from '../TopBar/TopBar'
import styles from './App.module.css'

function App() {
  return (
    <>
      <TopBar />
      <div className={styles.app_wrap}>
        <span>To do, or not to do, that is the question</span>
        <h1>Lets Started!</h1>
      </div>
    </>
  )
}

export default App
