import React from "react";
import { postUsers } from "../services/api";
const Connexion = () => {
    /*
        ajouter l'événement onSubmit sur <form>
        créer la fonction lié à l'événement
        dans la fonction :
            - récupérer la saisie : utiliser FormData
            - convertir FormData en objet
            - appeler la fonction de requête http avec l'objet
    */

    const handleSubmit =(e)=>{

        //on commance toujours par ça pour eviter le rechargement de la page :
        e.preventDefault();


        // recuperer les donner saissie dans le formulaire:
        const formData = Object.fromEntries(new FormData(e.target));

        //convertir les donner en onbject:
        // console.log(formData);


        // appler la fonction de la reqette:
        postUsers(formData);
    }
    
    return <form onSubmit={handleSubmit}>
        <h1>Pouvez-vous créer un compte, s'il vous plaît!</h1>
            <label for="email">Email</label>
            <input type="mail" id="email" name="email" placeholder="Your email"></input>

            <label for="password">Email</label>
            <input type="password" id="mdp" name="mdp" placeholder="Your password"></input>

            <label for="Conditions">Conditions</label>
            <input type="checkbox" id="conditions" name="conditions" placeholder="Accepter les conditions?"></input>

            <input type="submit" placeholder="Envoyer" ></input> 
            
            {/* <input type="delete" placeholder="Delete" ></input>  */}

        </form>
}

export default Connexion;