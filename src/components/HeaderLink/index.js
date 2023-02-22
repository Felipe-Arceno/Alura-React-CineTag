import { Link } from "react-router-dom";
import styles from "./HeaderLink.module.css";

const HeaderLink = ({ url, children }) => {
  return (
    <Link className={styles.link} to={url}>
      {children}
    </Link>
  );
};

export default HeaderLink;
