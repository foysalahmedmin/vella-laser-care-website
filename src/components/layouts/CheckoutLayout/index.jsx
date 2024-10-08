import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <>
      <Header variant="checkout" />
      <Outlet />
    </>
  );
};

export default CheckoutLayout;
