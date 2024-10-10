import DefaultTopHeader from "./Variants/DefaultTopHeader";

const TopHeader = ({ variant, user }) => {
  return (
    <>
      {variant === "default" && <DefaultTopHeader user={user} />}
      {variant === "home" && <DefaultTopHeader user={user} />}
      {variant === "checkout" && <header />}
      {variant === "authentication" && <header />}
    </>
  );
};

export default TopHeader;
