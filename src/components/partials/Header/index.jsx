import useUser from "@/redux/slices/user-slice/useUser";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = async () => {
  const {user} = useUser()
  return (
    <>
      <TopHeader user={user} />
      <Navigation user={user} />
    </>
  );
};

export default Header;
