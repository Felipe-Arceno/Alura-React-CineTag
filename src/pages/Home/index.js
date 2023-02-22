import { Fragment } from "react";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import videos from "json/db.json";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Banner image="Home" />
      <Title>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Title>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </Fragment>
  );
};

export default Home;
