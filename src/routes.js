import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
