import React from "react";
import styles from './Image.module.css'

interface Gifprops{
    src: string,
    alt?: string,
    className?: string,
}

const Image:React.FC<Gifprops> = ({src, alt, className}) => {
    return(
        <img 
        src={src}
        alt={alt} 
        className={`${styles.image} ${className}`}
        />
    );
}

export default Image