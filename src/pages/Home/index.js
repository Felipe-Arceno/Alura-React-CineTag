import Header from "../../components/Header";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner image="Home" />
      <Title>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Title>
      <Card
        id="01"
        title="Gato"
        cover="https://th.bing.com/th/id/R.2ace3ac942712dfce9a1e44ace8dfe0e?rik=0y52T5WRnAHw7w&riu=http%3a%2f%2fwww.toledoblade.com%2fimage%2f2014%2f05%2f28%2f800x_b1_cCM_z%2fn4fletchercat.jpg&ehk=L%2fEK1O7YejhPo6qg%2f7wWqwn0boNrSSCGvQIXhny99%2bk%3d&risl=&pid=ImgRaw&r=0"
      />
      <Footer />
    </Fragment>
  );
};

export default Home;
