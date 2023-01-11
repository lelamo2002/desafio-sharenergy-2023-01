import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={'https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png'}
          alt="Logo"
          className={styles.logo}
        />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/customers">
          Clientes
        </Link>
        <Link className={styles.link} to="/users">
          Users
        </Link>
        <Link className={styles.link} to="/dogs">
          Random Dogs
        </Link>
        <Link className={styles.link} to="/cats">
          Cat Errors
        </Link>
      </nav>
    </header>
  );
}

export { Header };
