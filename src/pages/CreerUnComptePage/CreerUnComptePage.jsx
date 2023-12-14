import React from 'react'
import styles from './CreerUnComptePage.module.css'
import { NavLink } from 'react-router-dom';

export default function CreerUnComptePage() {
  const handleSubmit = (e) => {


    /*
        ajouter l'événement onSubmit sur <form>
        créer la fonction lié à l'événement
        dans la fonction :
            - récupérer la saisie : utiliser FormData
            - convertir FormData en objet
            - appeler la fonction de requête http avec l'objet
    */

    const handleSubmit = (e) => {

      //on commance toujours par ça pour eviter le rechargement de la page :
      e.preventDefault();


      // recuperer les donner saissie dans le formulaire:
      const formData = Object.fromEntries(new FormData(e.target));

      //convertir les donner en onbject:
      // console.log(formData);


      // appler la fonction de la reqette:
      postUsers(formData);

    }
  }

    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formCrontroller}>
              {/* <label for="email">Email</label> */}
              <input type="text" id="username" name="username" placeholder="Your username"></input>
            </div>
            <div className={styles.formCrontroller}>
              {/* <label for="email">Email</label> */}
              <input type="mail" id="email" name="email" placeholder="Your email"></input>
            </div>
            <div className={styles.formCrontroller}>
              {/* <label for="password">Password</label> */}
              <input type="password" id="mdp" name="mdp" placeholder="Your password"></input>
            </div>


            <div className='flex justity-between my-5'>
              <p>Déjà un compte </p>
              <NavLink to='../connexion'>Se connecter</NavLink>
            </div>
            <button className={styles.btn} type="submit">Créer un compte</button>
          </form>
        </div>
      </div >
    );
}