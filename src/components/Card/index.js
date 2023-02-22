import styles from "./Card.module.css";
import iconHeartFilled from "./iconHeartFilled.png";
import iconHeart from "./iconHeartNotFilled.png";

const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img src={iconHeart} alt="Favoritar Filme" className={styles.favorite} />
    </div>
  );
};

export default Card;
