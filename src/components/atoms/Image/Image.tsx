import React from "react";
import styles from './Image.module.css'

interface Imageprops{
    src: string,
    alt: string,
    className?: string,
}

const Image:React.FC<Imageprops> = ({src, alt, className}) => {
    return(
        <img 
        src={src}
        alt={alt} 
        className={`${styles.image} ${className}`}
        />
    );
}

export default Image

