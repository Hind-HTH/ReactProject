import React from 'react'
// import { postUsers } from "../services/api";
import styles from './ConnexionPage.module.css'
import { NavLink } from 'react-router-dom';

export default function ConnexionPage() {

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form>
          <div className={styles.formCrontroller}>
            {/* <label for="email">Email</label> */}
            <input type="mail" id="email" name="email" placeholder="Your email"></input>
          </div>
          <div className={styles.formCrontroller}>
            {/* <label for="password">Password</label> */}
            <input type="password" id="mdp" name="mdp" placeholder="Your password"></input>
          </div>
          <div className='flex justity-between my-5'>
            <p>Pas encore de compte </p>
            <NavLink to='../create-account'>Creer un compte</NavLink>
          </div>
          <button className={styles.btn} type="submit">Se connecter</button>
        </form>
      </div>
    </div >
  )
}


