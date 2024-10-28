import AuthenticationNavigation from "./Variants/AuthenticationNavigation";
import CheckoutNavigation from "./Variants/CheckoutNavigation";
import DefaultNavigation from "./Variants/DefaultNavigation";
import HomeNavigation from "./Variants/HomeNavigation";

const Navigation = ({ variant }) => {
  return (
    <>
      {variant === "default" && (
        <DefaultNavigation className="lg:text-xs xl:text-sm 2xl:text-base" />
      )}
      {variant === "home" && (
        <HomeNavigation className="text-xs xl:text-sm 2xl:text-base" />
      )}
      {variant === "checkout" && (
        <CheckoutNavigation className="text-xs xl:text-sm 2xl:text-base" />
      )}
      {variant === "authentication" && (
        <AuthenticationNavigation className="text-xs xl:text-sm 2xl:text-base" />
      )}
    </>
  );
};

export default Navigation;
