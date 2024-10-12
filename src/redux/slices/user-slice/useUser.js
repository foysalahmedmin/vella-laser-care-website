const useUser = () => {
  const { role, accessToken, refreshToken } = localStorage.getItem("vella_user")
    ? JSON.parse(localStorage.getItem("vella_user"))
    : {};

  return { role, accessToken, refreshToken, isAuthenticated: !!accessToken };
};

export default useUser;
