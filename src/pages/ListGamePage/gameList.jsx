import React from 'react'
import styles from './GameList.module.css'

export default function GameList() {

    return <div class={ styles.grid }>
        <div class={ styles.item }><a href="#"><img src="/img/cod.jpg"/></a></div>
        <div class={ styles.item }><a href="#"><img src="/img/valo.png"  /></a></div>
        <div class={ styles.item }><a href="#"><img src="img/fortnite.jpg" /></a></div>
        <div class={ styles.item }><a href="#"><img src="/img/doom.jpg"/></a></div>
        <div class={ styles.item }><a href="#"><img src="img/league.jpeg" /></a></div>
        <div class={ styles.item }><a href="#"><img src="img/st.jpg" /></a></div>
    </div>

//   return <center> <table>
//         <tr><h1>Tournament Available </h1></tr>
//         <tr>
//             <td><a href="#"><img src="img/cod.jpg" width="150px"/></a></td>
//             <td><a href="#"><img src="img/valo.png" width="150px" /></a></td>
//             <td><a href="#"><img src="img/fortnite.webp" width="150px"/></a></td>
            
//         </tr>

//         <tr>
//             <td><a href="#">Call of Duty</a></td>
//             <td><a href="#">Valorant</a></td>
//             <td><a href="#">Fortnite</a></td>
            
//             <td></td>
//         </tr>

//         <tr>
//             <td><a href="#"><img src="/img/doom.jpg" width="150px"/></a></td>
//             <td><a href="#"><img src="img/lol.jpg" width="150px"/></a></td>
//             <td><a href="#"><img src="img/st.jpg" width="150px"/></a></td>
//         </tr>

//         <tr>
//             <td><a href="#">Doom</a></td>
//             <td><a href="#">League of legends</a></td>
//             <td><a href="#">Street Fighters</a></td>
//         </tr>
//     </table>
//     </center>

}
