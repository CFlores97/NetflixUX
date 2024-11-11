import React from 'react';
import styles from './Description.module.css';

interface DescriptionProps {
    text: string;
    className?: string;
}

const Description: React.FC<DescriptionProps> = ({ text, className = '' }) => {
    return <p className={`${styles.description} ${className}`}>{text}</p>;
};

export default Description;