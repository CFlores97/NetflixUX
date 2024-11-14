import React from 'react';
import styles from './Miniature.module.css';
import Image from '../../atoms/Image/Image';

interface Mini {
    img: string,
    gif?: string
    title?: string
    loaded?: number,

}

interface MiniatureProps extends Mini {
    showProgressBar?: boolean;
}

const Miniature: React.FC<MiniatureProps> = ({ img, title, loaded, gif, showProgressBar }) => {
    const progress = loaded !== undefined ? loaded : Math.floor(Math.random() * 100);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image src={img} alt={title || "Miniature"} className={styles.staticImage} />
                    {gif && <img src={gif} alt={`${title} GIF`} className={styles.gifImage}></img>}
                </div>
                {showProgressBar && (
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
                    </div>
                )}
            </div>


        </>
    );
}

export default Miniature