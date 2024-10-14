import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const ParlorLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ParlorLayout;
