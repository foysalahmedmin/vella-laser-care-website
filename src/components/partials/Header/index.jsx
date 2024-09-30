import useUser from "@/redux/slices/user-slice/useUser";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = ({ layout = "main" }) => {
  const { user } = useUser();
  return (
    <>
      <TopHeader user={user} />
      <Navigation layout={layout} user={user} />
    </>
  );
};

export default Header;
