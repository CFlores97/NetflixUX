import React, {useState} from "react";
import Navitem from "../../atoms/Button/Navitem";
import styles from './NavBar.module.css'
import Button from "../../atoms/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo, faMagnifyingGlass, faBell, faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Netflix</div>
            <div className={styles.menu}>
                <Navitem text="Inicio"></Navitem>
                <Navitem text="Series"></Navitem>
                <Navitem text="Peliculas"></Navitem>
                <Navitem text="Novedades populares"></Navitem>
                <Navitem text="Mi lista"></Navitem>
                <Navitem text="Explora por idiomas"></Navitem>
            </div>
            <div className={styles.profileItems}>
                <Navitem icon={faMagnifyingGlass} />
                <Navitem text="Niños" />
                <Navitem icon={faBell} />
                <Navitem icon={faUser} />
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
        </nav>
    );
}

export default NavBar