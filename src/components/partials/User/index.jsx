import { urls } from "@/api/urls";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { fetchMe, mutateSignOut } from "@/network/user/userApis";
import { Edit, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserEditModal from "./UserEditModal";

const User = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: mutateSignOut,
  });
  const handleOut = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("vella-user"));
      const status = await mutateAsync({ refreshToken: token?.refreshToken });
      localStorage.removeItem("vella-user");
      toast.success(status?.message || "Successfully Logged Out!");
      setIsOpen(false);
      navigate("/authentication/sign-in");
    } catch (error) {
      setIsOpen(false);
      toast.error(error?.message || "An Error Found!");
    }
  };
  return (
    <div className="relative inline-flex">
      {data && (
        <>
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full"
            size="icon"
          >
            {data?.photo ? (
              <img
                src={`${urls?.userPhoto}/${data?.photo}`}
                className="h-full w-full rounded-full object-cover object-center text-accent"
                alt="profile-image"
              />
            ) : (
              <UserIcon size={32} />
            )}
          </Button>
          <Dropdown
            className="left-auto right-0 min-w-80 origin-top-right -translate-x-0"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="px-4 py-2">
              <div className="mb-4 text-center text-sm">{data?.email}</div>
              <div className="mb-4 text-center">
                <div
                  className="relative mx-auto inline-block size-20 rounded-full"
                  size="icon"
                >
                  {data?.photo ? (
                    <img
                      src={`${urls?.userPhoto}/${data?.photo}`}
                      className="h-full w-full rounded-full object-cover object-center text-accent"
                      alt="profile-image"
                    />
                  ) : (
                    <UserIcon size={80} />
                  )}
                  <Button
                    onClick={() => setIsEditModalOpen(true)}
                    className="absolute bottom-0 right-0 cursor-pointer rounded-full border hover:bg-accent"
                    size="icon-sm"
                  >
                    <Edit size={16} />
                  </Button>
                  <UserEditModal
                    user={data}
                    isOpen={isEditModalOpen}
                    setIsOpen={setIsEditModalOpen}
                  />
                </div>
                <h3 className="font-bold text-title">{data?.name}</h3>
                <p>{data?.role}</p>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleOut}
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Sign out
                </Button>
              </div>
            </div>
          </Dropdown>
        </>
      )}
    </div>
  );
};

export default User;
