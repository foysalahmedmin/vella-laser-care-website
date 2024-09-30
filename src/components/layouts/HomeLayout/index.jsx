import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header layout="home" />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
