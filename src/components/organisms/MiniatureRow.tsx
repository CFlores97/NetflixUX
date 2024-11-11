import React, { useRef } from 'react';
import Miniature from '../molecules/Miniature/Miniature';
import styles from './MiniatureRow.module.css'
import Title from '../atoms/Title/Title';

interface MiniatureProps {
    title: string;
    movies: Array<string>;
  }

const MiniatureRow: React.FC<MiniatureProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (rowRef.current) rowRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    if (rowRef.current) rowRef.current.scrollLeft += 300;
  };

  return (
    <div className={styles.row}>
      <Title text={title}></Title>
      <div className={styles.row__controls}>
        <button onClick={scrollLeft}>{"<"}</button>
        <div className={styles.row__posters} ref={rowRef}>
          {movies.map((movie) => (
            <Miniature img={movie}>
            </Miniature>
          ))}
        </div>
        <button onClick={scrollRight}>{">"}</button>
      </div>
    </div>
  );
};

export default MiniatureRow;