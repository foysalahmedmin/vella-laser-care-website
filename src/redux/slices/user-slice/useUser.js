import { useDispatch, useSelector } from "react-redux";
import { setUser as setUserSlice } from ".";

const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  const setUser = (user) => dispatch(setUserSlice(user));

  return { user, setUser };
};

export default useUser;
