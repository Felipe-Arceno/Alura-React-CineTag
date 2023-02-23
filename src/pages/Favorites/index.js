import { Fragment } from "react";
import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorites.module.css";
import videos from "json/db.json";
import Card from "components/Card";
import { useFavoriteContext } from "contextos/Favorites";

const Favorites = () => {
  const { favorite } = useFavoriteContext();

  return (
    <Fragment>
      <Banner image="Favorites" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>

      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </Fragment>
  );
};

export default Favorites;
