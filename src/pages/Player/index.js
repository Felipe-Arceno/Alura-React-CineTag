import Banner from "components/Banner";
import Title from "components/Title";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NotFound from "pages/NotFound";

const Player = () => {
  const [video, setVideo] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Felipe-Arceno/CinteTag-JSON-api/videos?id=${params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      });
  }, []);

  if (!video) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <Banner image="Player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </Fragment>
  );
};

export default Player;
