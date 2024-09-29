import useUser from "@/redux/slices/user-slice/useUser";
import { Navigate, useLocation } from "react-router-dom/dist";

const PrivateRout = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  if (user?.accessToken) {
    return children;
  }

  return (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  );
};

export default PrivateRout;
