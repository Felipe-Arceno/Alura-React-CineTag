import { Link } from "react-router-dom";
import iconLogo from "./logoCineTag.png";
import styles from "../Header/Header.module.css";
import HeaderLink from "../HeaderLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={iconLogo} alt="Logo do CineTag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>

        <HeaderLink url="./Favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
