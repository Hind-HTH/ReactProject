import React,  { useEffect, useState }from 'react'
import styles from './GameList.module.css'
import { Link } from 'react-router-dom'

export default function GameList() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/games');
            const data = await response.json();
            setGames(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
    
        fetchData();
      }, []);

    return <div class={ styles.grid }>
        {games.map((game) =>
        (

            <div key={game.id} className={styles.item}>
              {/* Utilisez Link pour créer un lien avec un paramètre */}
              <Link to={`/formGame/${game.id}`}>
                <img src={game.url} alt={game.title} />
              </Link>
            </div>
          ))}
    
        
    </div>

}
