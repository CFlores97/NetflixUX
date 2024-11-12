import React from 'react';
import styles from './Miniature.module.css';
import Image from '../../atoms/Image/Image';

interface Mini {
    img: string,
    gif?: string
    title?: string
    loaded?: number,

}

const Miniature: React.FC<Mini> = ({ img, title, loaded, gif }) => {
    const progress = loaded !== undefined ? loaded : Math.floor(Math.random() * 100);
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image src={img} alt={title || "Miniature"} className={styles.staticImage} />
                    {gif && <img src={gif} alt={`${title} GIF`} className={styles.gifImage}></img>}
                </div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${progress}%` }}></div>
            </div>
        </>
    );
}

export default Miniature