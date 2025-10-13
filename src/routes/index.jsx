import { Routes, Route } from "react-router";
import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";

const RoutApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1> About page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutApp;
