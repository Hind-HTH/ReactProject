import React, { useState } from "react";
import { postUsers } from "../services/api";
import styles from './CreerUnComptePage/CreerUnComptePage.module.css';
const Inscription = () => {
    //je l'ai utiliser pour afficher le message denregistrement
    const [successMessage, setSuccessMessage] = useState(null);
    /*
        ajouter l'événement onSubmit sur <form>
        créer la fonction lié à l'événement
        dans la fonction :
            - récupérer la saisie : utiliser FormData
            - convertir FormData en objet
            - appeler la fonction de requête http avec l'objet
    */

    const handleSubmit = async (e) => {

        //on commance toujours par ça pour eviter le rechargement de la page :
        e.preventDefault();


        // recuperer les donner saissie dans le formulaire:
        const formData = Object.fromEntries(new FormData(e.target));

        //convertir les donner en onbject:
        // console.log(formData);


        try {
            // Appeler la fonction de la requête et attendre la réponse
            await postUsers(formData);

            // Mettre à jour le message de succès si l'enregistrement est réussi
            setSuccessMessage("Félicitations, vous êtes inscrit avec succès!");
        } catch (error) {
            // Gérer les erreurs ici
            console.error("Erreur lors de l'enregistrement :", error);
            // Afficher un message d'erreur si nécessaire
        }
        // appler la fonction de la reqette:
        //postUsers(formData);
    }

    return <div className={styles.container}>
        <div className={styles.card}>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <h1>Inscrivez-vous!</h1>
                <p className={styles.formCrontroller}>
                    <label htmlFor="email">Email</label>
                    <input type="mail" id="email" name="email" placeholder="Your email"></input>
                </p>
                <p className={styles.formCrontroller}>
                    <label htmlFor="password">Email</label>
                    <input type="password" id="mdp" name="mdp" placeholder="Your password"></input>
                </p>
                <p className={styles.formCrontroller}>
                    <label htmlFor="Conditions">Conditions</label>
                    <input type="checkbox" id="conditions" name="conditions" placeholder="Accepter les conditions?"></input>
                </p>

                <input type="submit" className={styles.btn} placeholder="Envoyer" ></input>

                {/* <input type="delete" placeholder="Delete" ></input>  */}

            </form>

        </div>
    </div>
}

export default Inscription;


// creation d'une partie de connexion: