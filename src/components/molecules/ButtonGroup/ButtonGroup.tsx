import React from "react";
import Button from "../../atoms/Button/Button";
import styles from './ButtonGroup.module.css'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const ButtonGroup: React.FC = () => {
    return(
        <div className={styles.buttonGroup}>
            <Button text="Reproducir" className={styles.playBtn} icon={faPlay} />
            <Button text="Más información" className={styles.moreInfoBtn} icon={faCircleInfo} />
        </div>
    );
}

export default ButtonGroup