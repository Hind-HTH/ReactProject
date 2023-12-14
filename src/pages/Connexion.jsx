import React from "react";
import { checkUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import styles from './ConnexionPage/ConnexionPage.module.css';

const Connexion = () => {
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
        checkUser(formData).then(result => {
            if (result) {
                // redirection vers la page de listage des jeux
                navigate('/list-jeux');
                
            } else {
                // redirection vers l'inscription
                navigate('/inscription');

            }
        });
    }

    return <div className={styles.container}>
        <div className={styles.card}>
            <form onSubmit={handleSubmit}>
                <h1>Connectez-vous !</h1>
                <p className={styles.formCrontroller}>

                <label htmlFor="email">Email</label>
                <input type="mail" id="email" name="email" placeholder="Your email"></input>
                </p>

                <p className={styles.formCrontroller}>
                <label htmlFor="password">Email</label>
                <input type="password" id="mdp" name="mdp" placeholder="Your password"></input>
                </p>

                <input type="submit" className={styles.btn} placeholder="Envoyer" ></input>

                {/* <input type="delete" placeholder="Delete" ></input>  */}

            </form></div></div>
}


export default Connexion;


// creation d'une partie de connexion: