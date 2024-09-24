import useUser from "@/redux/slices/user-slice/useUser";
import { routes } from "@/routes";
import navItemsGenerator from "@/utils/navItemsGenerator";
import { useEffect, useState } from "react";

const useNavItems = () => {
  const [navItems, setNavItems] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    const items = navItemsGenerator({
      items: routes,
      userRole: user?.role || "",
    });
    if (items) {
      setNavItems(items);
    }
  }, [user]);
  return navItems;
};

export default useNavItems;
