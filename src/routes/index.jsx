import { Routes, Route } from "react-router";
import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import NotFound from "../pages/404/NotFound";
import UsersProfile from "../components/HeroSection/UsersProfile/UsersProfile";
import UserDetails from "../components/HeroSection/UsersProfile/UserDetails";
import About from "../components/About/About";

const RoutApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/user-Profile" element={<UsersProfile />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>

        {/* 👇 This should always be the last Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutApp;
