import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
