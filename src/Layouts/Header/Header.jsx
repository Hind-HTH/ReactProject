import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='connexion'>Connexion</NavLink>
        <NavLink to='list-jeux'>Liste jeux</NavLink>
        <NavLink to='create-account'>Creer un compte</NavLink>
      </header>
    </div>
  );
};

export default Header;
