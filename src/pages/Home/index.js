import { Fragment, useEffect, useState } from "react";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from "./Home.module.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Felipe-Arceno/CinteTag-JSON-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  console.log(videos);
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
