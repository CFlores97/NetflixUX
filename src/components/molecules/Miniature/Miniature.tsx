import React from 'react';
import styles from './Miniature.module.css';
import Image from '../../atoms/Image/Image';

interface Mini {
    img:string,
    title?:string
    loaded?:number,

}

const Miniature: React.FC<Mini> = ({img,title,loaded}) => {
    return(
        <>
            <Image src={img} alt={title} className={styles.img}></Image>
        </>
    );
}

export default Miniature