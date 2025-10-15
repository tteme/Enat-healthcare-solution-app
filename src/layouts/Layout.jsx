import { Outlet } from "react-router";
import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
