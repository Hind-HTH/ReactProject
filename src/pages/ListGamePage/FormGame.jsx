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
        <center>
      <div className={styles.title}><img src={game.logo}></img></div></center>
      <div className={styles.grid}>
        <div className={styles.item}>
          <a href="#">
            <div className={styles.content}><img src={game.url} alt={game.name} /></div>
          </a>
        </div>
        <div className={styles.item}>
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
}
