import { Link } from "react-router-dom";
import iconLogo from "./logo.png";
import "./Header.module.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="./">
        <img src={iconLogo} alt="Logo do CineTag" />
      </Link>
      <nav></nav>
    </header>
  );
};

export default Header;
