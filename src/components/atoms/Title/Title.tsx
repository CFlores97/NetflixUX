import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
    text: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
    return <h1 className={`${styles.title} ${className}`}>{text}</h1>;
};

export default Title;