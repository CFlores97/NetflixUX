import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.css'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtronProps {
    text: string,
    className?: string,
    icon?: IconDefinition, 
}

const Button: React.FC<ButtronProps> = ({text, className, icon}) => {
    return(
        <button className={`${styles.button} ${className || ''}`}>
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon}/>}
            {text}
        </button>
    );
}

export default Button