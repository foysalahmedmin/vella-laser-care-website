export const errorMessage = (error) => {
  return (
    error?.response?.data?.error?.message ||
    error?.response?.data?.message ||
    error?.data?.message ||
    error?.message
  );
};
