import CheckoutTopHeader from "./Variants/CheckoutTopHeader";
import DefaultTopHeader from "./Variants/DefaultTopHeader";

const TopHeader = ({ variant, user }) => {
  return (
    <>
      {variant === "default" && <DefaultTopHeader user={user} />}
      {variant === "home" && <DefaultTopHeader user={user} />}
      {variant === "checkout" && <CheckoutTopHeader user={user} />}
    </>
  );
};

export default TopHeader;
