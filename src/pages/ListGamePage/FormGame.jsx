import React, { useState, useEffect } from 'react';
import styles from './FormGame.module.css';
import { useParams } from 'react-router-dom';

export default function FormGame() {
  const { id } = useParams();
  const [game, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/games/${id}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className={styles.cardDetail}>
        <div className='flex justify-between'>
          <img src={game.url} className={styles.img} alt={game.name} />
          <div className={`${styles.descContainer} flex justify-center items-center p-20`}>
            <div>
              <h1 className='mb-30'>{game.title}</h1>
              <h4 className='mb-30'>{game.description}</h4>
              <button className={styles.btn}>S'inscrire </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
