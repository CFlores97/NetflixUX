import Button from "./components/atoms/Button/Button"
import styles from './components/atoms/Button/Button.module.css'
import NavBar from "./components/molecules/NavBar/NavBar"
import Banner from "./components/organisms/Banner/Banner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <Banner title="N1 mundial" description="Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos" backgroundImage="https://media.a24.com/p/d05dedb6d03cf6d673575911bbddfc3a/adjuntos/296/imagenes/008/530/0008530982/breaking-badjpg.jpg" />
    </>

  );
}

export default App
