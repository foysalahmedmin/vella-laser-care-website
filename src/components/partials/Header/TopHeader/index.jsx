const TopHeader = () => {
  return (
    <div className="h-10 bg-primary/15">
      <div className="container flex h-full items-center justify-between">
        <div>
          <p>Welcome to Z-Commerce</p>
        </div>
        <div className="flex items-center divide-x">
          <div
            to="/seller/sign-up"
            className="group flex items-center gap-1 pr-2 hover:text-primary"
          >
            Become a Seller
          </div>
          <div
            to="/seller/sign-in"
            className="group flex items-center gap-1 px-2 hover:text-primary"
          >
            Sign-in To Seller
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
