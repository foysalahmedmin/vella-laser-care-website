import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = ({ variant = "default" }) => {
  return (
    <>
      <TopHeader variant={variant} />
      <Navigation variant={variant} />
    </>
  );
};

export default Header;
