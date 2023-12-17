import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
// import { logout } from '../../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Header = () => {

  const { logout, user } = useContext(AuthContext)
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <header className={styles.header}>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='list-jeux'>Liste jeux</NavLink>
        {user && <NavLink to='profile'>Profile</NavLink>}
        {user && <NavLink onClick={handleLogout}>Deconnexion</NavLink>}
      </header>
    </div>
  );
};

export default Header;
