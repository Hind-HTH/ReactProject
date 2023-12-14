import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink to='/'>home</NavLink>
      </header>
    </div>
  );
};

export default Header;
