import React from "react";
import styles from './Navitem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavitemProps {
    to?: string,
    text?: string,
    className?: string,
    icon?: IconDefinition,
    image?: string,

}

const Navitem: React.FC<NavitemProps> = ({ to, className, text, icon, image }) => {
    return (
        <li className={styles.listItem}>
            <a className={styles.navitem} href={to}>
                {image ? (
                    <img src={image} alt={`${text} icon`} className={styles.image} />
                ) : (
                    icon && <FontAwesomeIcon icon={icon} className={styles.icon} />
                )}
                
                {text && <span className={styles.text}>{text}</span>}
            </a>
        </li>
    );
}

export default Navitem

