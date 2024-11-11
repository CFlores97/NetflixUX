import React from 'react';
import styles from './Banner.module.css';
import Title from '../../atoms/Title/Title';
import Description from '../../atoms/Description/Description';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';
import Image from '../../atoms/Image/Image';
import NavBar from '../../molecules/NavBar/NavBar';

interface Bannerprops {
    backgroundImage: string,
    title: string,
    description: string,
}

const Banner: React.FC<Bannerprops> = ({ backgroundImage, title, description }) => {
    return (
        <>

            <div className={styles.banner} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={styles.overlay}>
                    <div className={styles.contenido}>
                    <NavBar></NavBar>
                        <Title text={title} />
                        <Description text={description} />
                        <ButtonGroup />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner