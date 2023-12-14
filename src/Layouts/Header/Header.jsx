import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='connexion'>Connexion</NavLink>
        <NavLink to='list-jeux'>Liste jeux</NavLink>
      </header>
    </div>
  );
};

export default Header;
