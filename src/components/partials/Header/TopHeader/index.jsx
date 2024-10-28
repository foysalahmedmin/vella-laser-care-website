import DefaultTopHeader from "./Variants/DefaultTopHeader";

const TopHeader = ({ variant, user }) => {
  return (
    <>
      {variant === "default" && (
        <DefaultTopHeader
          user={user}
          className="text-[0.5rem] sm:text-[0.625rem] md:text-xs xl:text-base"
        />
      )}
      {variant === "home" && (
        <DefaultTopHeader
          user={user}
          className="text-[0.5rem] sm:text-[0.625rem] md:text-xs xl:text-base"
        />
      )}
      {variant === "checkout" && <header />}
      {variant === "authentication" && <header />}
    </>
  );
};

export default TopHeader;
