import React from 'react'
import styles from './HomePage.module.css'
import Connexion from '../Connexion'

export default function HomePage() {
  return (
  
    <div  className={styles.HomePage}>
      <h1>HomePage</h1>
      <Connexion />
    </div>
    
  )
}
