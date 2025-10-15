import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import NotFound from "../pages/404/NotFound";
import UsersProfile from "../components/HeroSection/UsersProfile/UsersProfile";
import UserDetails from "../components/HeroSection/UsersProfile/UserDetails";
import About from "../components/About/About";
import Services from "../components/Service/Services";
import BmiCalculator from "../components/BmiCalculator/BmiCalculator";
import Layout from "../layouts/Layout";

const RoutApp = () => {
  return (
    <>
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/appointment" element={<h1>Appointment Page </h1>} />
          <Route path="/services" element={<Services />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/user-Profile" element={<UsersProfile />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>

          {/* 👇 This should always be the last Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutApp;
