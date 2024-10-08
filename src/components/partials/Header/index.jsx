import useUser from "@/redux/slices/user-slice/useUser";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = ({ variant = "default" }) => {
  const { user } = useUser();
  return (
    <>
      <TopHeader variant={variant} user={user} />
      <Navigation variant={variant} user={user} />
    </>
  );
};

export default Header;
