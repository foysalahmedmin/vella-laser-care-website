import { urls } from "@/api/urls";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { updateMyProfile } from "@/network/user/userApis";
import { Plus, UserIcon } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const UserEditModal = ({ user, isOpen, setIsOpen }) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const handleUpdate = async () => {
    try {
      const status = await mutateAsync({
        id: user?._id,
        name,
        photo: image,
        password,
      });
      setIsOpen(false);
      toast.success(status?.message);
    } catch (error) {
      setIsOpen(false);
      toast.error(error?.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
      <div className="px-4 py-6">
        <div>
          <div className="mb-4 text-center">
            <label
              className="relative mx-auto inline-block size-20 cursor-pointer rounded-full"
              size="icon"
            >
              {user?.photo ? (
                <img
                  src={`${urls?.userPhoto}/${user?.photo}`}
                  className="h-full w-full rounded-full object-cover object-center text-accent"
                  alt="profile-image"
                />
              ) : (
                <UserIcon size={80} />
              )}
              <span
                className="absolute bottom-0 right-0 flex size-6 items-center justify-center rounded-full border border-accent bg-accent-foreground text-accent"
                size="icon-sm"
              >
                <Plus size={16} />
              </span>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) =>
                  setImage(
                    e?.target?.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : "",
                  )
                }
                hidden
                accept="image/*"
              />
            </label>
            <div className="mb-1 text-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mx-auto text-center font-bold text-title"
                onChange={(e) => setName(e?.target?.value)}
                value={name}
              />
            </div>
            <div className="text-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                disabled
                className="px-auto mb-4 inline-block text-center text-sm"
                onChange={(e) => setEmail(e?.target?.value)}
                value={email}
              />
            </div>
            <div className="text-center">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="px-auto mb-4 inline-block text-center text-sm"
                onChange={(e) => setPassword(e?.target?.value)}
                value={password}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 text-center">
            <Button
              className="w-full flex-1 rounded-e-none rounded-s-full"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="w-full flex-1 rounded-e-full rounded-s-none"
              onClick={handleUpdate}
              isLoading={isLoading}
              disabled={isLoading}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserEditModal;
