import { urls } from "@/api/urls.js";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { fetchMe } from "@/network/user/userApis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, LogIn, LogOut, User, User2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom/dist";

const UserAndAuthNav = ({ user }) => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useUser();
  const [isOpen, setIsOpen] = useState();
  const { data: me } = useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
    enabled: isAuthenticated,
  });
  const handleLogout = () => {
    localStorage.removeItem("vella_user");
    navigate("/");
  };
  return (
    <div>
      {isAuthenticated ? (
        <div className="relative">
          <div
            onClick={() => setIsOpen((value) => !value)}
            className="flex cursor-pointer items-center gap-2"
          >
            <div className="size-10 overflow-hidden rounded-full border bg-background">
              <img
                src={
                  me?.photo
                    ? `${urls?.user_photos}/${me?.photo}`
                    : "/images/partials/user.png"
                }
                alt={me?.name}
                className="size-full rounded-full object-cover object-center"
              />
            </div>
            <div className="hidden text-sm md:block">
              <span className="block font-medium text-title/85">
                {me?.name}
              </span>
              <span className="block text-xs text-muted-foreground">
                {me?.email}
              </span>
            </div>
            <ChevronDown className="hidden size-6 text-title/85 md:block" />
          </div>
          <Dropdown
            className="left-auto right-0 z-[60] min-w-40 origin-top-right -translate-x-0 shadow-custom-1"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <ul className="">
              <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-muted/15">
                <div className="inline-block size-5 rounded-full object-cover object-center text-title/85">
                  {user?.image ? (
                    <img
                      src={user?.image || "/images/partials/user.png"}
                      alt={user?.name}
                      className="size-full rounded-full object-cover object-center"
                    />
                  ) : (
                    <User2 className="size-full" />
                  )}
                </div>
                <span
                  onClick={() =>
                    navigate(
                      role && role === "parlor"
                        ? "/parlor/profile"
                        : "/user/profile",
                    )
                  }
                  className="cursor-pointer text-sm leading-none"
                >
                  View Profile
                </span>
              </li>
              <li
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-muted/15"
              >
                <div className="inline-block size-5 rounded-full object-cover object-center text-title/85">
                  <LogOut className="size-full" />
                </div>
                <span className="cursor-pointer text-sm leading-none">
                  Logout
                </span>
              </li>
            </ul>
          </Dropdown>
        </div>
      ) : (
        <Link title="Login" to={"/authentication/sign-in"}>
          <Button asChild className="uppercase" size="sm">
            <span className="hidden sm:block">Login / Register</span>
            <User className="hidden size-4 sm:block" />
            <LogIn className="size-6 sm:hidden" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserAndAuthNav;
