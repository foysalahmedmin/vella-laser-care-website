import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { Edit, LogIn, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom/dist";

const UserAndAuthNav = ({ user }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div>
      {Object.keys(user).length > 0 ? (
        <div className="relative">
          <div className="size-8 animate-pop cursor-pointer overflow-hidden rounded-full border border-primary bg-primary/5">
            <img
              onClick={() => setIsOpen((value) => !value)}
              title={user?.name}
              src={user?.image || "/images/svg/user.svg"}
              alt={user?.name}
              className="size-full rounded-full object-cover object-center"
            />
          </div>
          <Dropdown
            className="left-auto right-0 min-w-80 origin-top-right -translate-x-0"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="px-4 py-2">
              <div className="mb-4 text-center text-sm">{user?.email}</div>
              <div className="mb-4 text-center">
                <div
                  className="relative mx-auto inline-block size-20 rounded-full"
                  size="icon"
                >
                  <img
                    src={user?.image || "/images/svg/user.svg"}
                    className="size-20 rounded-full object-cover object-center text-accent"
                    alt="profile-image"
                  />
                  <Button
                    className="absolute bottom-0 right-0 cursor-pointer rounded-full border hover:bg-accent"
                    size="icon-sm"
                  >
                    <Edit size={16} />
                  </Button>
                </div>
                <h3 className="text-center font-bold text-title">
                  {user?.name}
                </h3>
                <small className="block text-center">{user?.email}</small>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Sign out
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
      ) : (
        <Link title="Login" to={"/user/sign-in"}>
          <Button asChild className="uppercase" size="sm">
            <span className="hidden sm:block">Login / Register</span>

            <User className="hidden size-6 sm:block" />
            <LogIn className="size-6 sm:hidden" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserAndAuthNav;
