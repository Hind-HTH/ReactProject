import React from 'react'
import { checkUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
// import { postUsers } from "../services/api";
import styles from './ConnexionPage.module.css'
import { NavLink } from 'react-router-dom';

export default function ConnexionPage() {
 /*
        ajouter l'événement onSubmit sur <form>
        créer la fonction lié à l'événement
        dans la fonction :
            - récupérer la saisie : utiliser FormData
            - convertir FormData en objet
            - appeler la fonction de requête http avec l'objet
    */

            const navigate = useNavigate();

            const handleSubmit = (e) => {
        
                //on commance toujours par ça pour eviter le rechargement de la page :
                e.preventDefault();
        
        
                // recuperer les donner saissie dans le formulaire:
                const formData = Object.fromEntries(new FormData(e.target));
        
                //convertir les donner en onbject:
                // console.log(formData);
        
        
                // appler la fonction de la reqette:
                checkUser(formData).then( result => {
                    if(result){
                        // redirection vers la page de listage des jeux
                        navigate('/list-jeux');
                    } else {
                        // redirection vers l'inscription
                        navigate('/Inscirption');
        
                    }
                } );
        
                
            }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form  onSubmit={handleSubmit}>
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


