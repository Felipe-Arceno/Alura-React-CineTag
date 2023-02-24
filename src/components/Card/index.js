import { useFavoriteContext } from "contextos/Favorites";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconHeartFilled from "./iconHeartFilled.png";
import iconHeart from "./iconHeartNotFilled.png";

const Card = ({ id, title, cover }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? iconHeartFilled : iconHeart;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`Videos/${id}`}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>

      <img
        src={icon}
        alt="Favoritar Filme"
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, title, cover });
        }}
      />
    </div>
  );
};

export default Card;
