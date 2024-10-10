import AuthenticationNavigation from "./Variants/AuthenticationNavigation";
import CheckoutNavigation from "./Variants/CheckoutNavigation";
import DefaultNavigation from "./Variants/DefaultNavigation";
import HomeNavigation from "./Variants/HomeNavigation";

const Navigation = ({ variant, user }) => {
  return (
    <>
      {variant === "default" && <DefaultNavigation user={user} />}
      {variant === "home" && <HomeNavigation user={user} />}
      {variant === "checkout" && <CheckoutNavigation user={user} />}
      {variant === "authentication" && <AuthenticationNavigation user={user} />}
    </>
  );
};

export default Navigation;
