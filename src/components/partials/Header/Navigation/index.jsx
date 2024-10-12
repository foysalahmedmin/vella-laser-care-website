import AuthenticationNavigation from "./Variants/AuthenticationNavigation";
import CheckoutNavigation from "./Variants/CheckoutNavigation";
import DefaultNavigation from "./Variants/DefaultNavigation";
import HomeNavigation from "./Variants/HomeNavigation";

const Navigation = ({ variant }) => {
  return (
    <>
      {variant === "default" && <DefaultNavigation />}
      {variant === "home" && <HomeNavigation />}
      {variant === "checkout" && <CheckoutNavigation />}
      {variant === "authentication" && <AuthenticationNavigation />}
    </>
  );
};

export default Navigation;
