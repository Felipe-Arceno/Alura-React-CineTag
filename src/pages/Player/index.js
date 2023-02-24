import Banner from "components/Banner";
import Title from "components/Title";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import styles from "./Player.module.css";
import NotFound from "pages/NotFound";

const Player = () => {
  const params = useParams();
  const video = videos.find((vid) => {
    return vid.id === Number(params.id);
  });

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
