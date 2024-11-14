import React, { useRef } from 'react';
import Miniature from '../molecules/Miniature/Miniature';
import styles from './MiniatureRow.module.css'
import Title from '../atoms/Title/Title';

interface Mini {
  img: string;
  gif?: string;
  title?: string;
  loaded?: number;
}

interface MiniatureProps {
  title: string;
  movies: Array<Mini>;
  id: string;
}

const MiniatureRow: React.FC<MiniatureProps> = ({ title, movies, id }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (rowRef.current) rowRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    if (rowRef.current) rowRef.current.scrollLeft += 300;
  };

  const mostrarProgressBar = title === "Seguir Viendo";

  return (
    <div className={styles.row} id={id}>
      <Title text={title} />
      <div className={styles.row__controls}>
        <button onClick={scrollLeft}>{"<"}</button>
        <div className={styles.row__posters} ref={rowRef}>
          {movies.map((movie, index) => (
            <Miniature
              key={index}
              img={movie.img}
              gif={movie.gif}
              title={movie.title}
              loaded={movie.loaded}
              showProgressBar={mostrarProgressBar}
            />
          ))}
        </div>
        <button onClick={scrollRight}>{">"}</button>
      </div>
    </div>
  );
};

export default MiniatureRow;