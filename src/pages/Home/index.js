import Header from "../../components/Header";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import Banner from "components/Banner";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner image="Home" />
      <Footer />
    </Fragment>
  );
};

export default Home;
