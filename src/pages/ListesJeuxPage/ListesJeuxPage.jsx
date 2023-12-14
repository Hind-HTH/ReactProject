import React from 'react'
import GameList from '../ListGamePage/gameList'
import styles from './ListesJeuxPage.module.css'

export default function ListesJeuxPage() {
  return (
    <div className={styles.container}>
      <GameList />
    </div>

  )
}
