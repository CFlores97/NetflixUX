import Button from "./components/atoms/Button/Button"
import styles from './components/atoms/Button/Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function App() {
  return(
    <div>
      <Button text="Reproducir" className={styles.playBtn} icon={ faPlay }/>
      <Button text="Más información" className={styles.moreInfoBtn} icon={faCircleInfo}/>
    </div>
  );
}

export default App
