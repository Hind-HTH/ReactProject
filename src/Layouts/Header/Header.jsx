import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='connexion'>Connexion</NavLink>
        <NavLink to='list-jeux'>Liste jeux</NavLink>
<<<<<<< HEAD
        <NavLink to='inscription'>creer un compte</NavLink>
=======
        <NavLink to='create-account'>Creer un compte</NavLink>
>>>>>>> 15eccbab10eb9711cce33c0cebd29041adf4be60
      </header>
    </div>
  );
};

export default Header;
