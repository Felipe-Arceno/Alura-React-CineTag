import { Fragment } from "react";
import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorites.module.css";
import videos from "json/db.json";
import Card from "components/Card";

const Favorites = () => {
  return (
    <Fragment>
      <Banner image="Favorites" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </Fragment>
  );
};

export default Favorites;
