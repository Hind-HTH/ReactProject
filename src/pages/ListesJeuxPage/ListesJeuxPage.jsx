import React from 'react'
import GameList from '../ListGamePage/gameList'
import styles from './ListesJeuxPage.module.css'

const ListesJeuxPage =() => {
  return (
    <div className={styles.container}>
      <GameList />

    </div>

  )
}
export default ListesJeuxPage;