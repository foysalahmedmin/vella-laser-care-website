import { Button } from "@/components/ui/Button";
import { Edit, MapPin } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchMe, mutateAppProfile } from "@/network/user/userApis.js";
import { urls } from "@/api/urls.js";
import { fetchFilteredCities } from "@/network/common/commonApis.js";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";

const ProfileSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
  const { data: me, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
  });
  const { data: cities } = useQuery({
    queryKey: ["filtered_cities"],
    queryFn: () => fetchFilteredCities(),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: mutateAppProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync({
        id: me?._id,
        name: name || me?.name,
        phone: phone || me?.phone,
        address: address || me?.address,
        postal: postal || me?.postal,
        city: city || me?.city,
        photo: photo,
        password,
      });
      setPhoto(null);
      setName("");
      setPhone("");
      setAddress("");
      setPostal("");
      setPassword("");
      setCity("");
      toast.success(response?.message);
      await refetch();
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-6 rounded-2xl px-8 py-16 shadow-custom-1 md:space-y-8 md:px-16 lg:px-24">
          <div className="rounded-2xl border p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="relative size-24 shrink-0 rounded-full border-4 border-card">
                {!photo && (
                  <img
                    className="size-full rounded-full object-cover object-center"
                    src={
                      me?.photo
                        ? `${urls?.user_photos}/${me?.photo}`
                        : "/images/partials/user.png"
                    }
                    alt=""
                  />
                )}
                {photo && (
                  <img
                    className="size-full rounded-full object-cover object-center"
                    src={URL.createObjectURL(photo)}
                    alt=""
                  />
                )}
                <label className="absolute bottom-0 right-0 inline-flex size-8 cursor-pointer items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground">
                  <input
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                  <Edit className="size-4" />
                </label>
              </div>
              <div className="space-y-1">
                <span className="block font-medium text-title/85">
                  {me?.name}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-5 text-primary" />
                  <span className="leading-none">{me?.address}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border p-8 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <h3>Personal Information</h3>
              <Button
                isLoading={isPending}
                disabled={isPending}
                onClick={handleSubmit}
                className="px-2"
                size="sm"
              >
                <Edit className="size-4" />
                <span>Update</span>
              </Button>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Name
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your First Name"
                      value={name || me?.name}
                      onChange={(e) => setName(e.target.value)}
                      name="first-name"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Email Address
                    </span>
                    <input
                      type="email"
                      className="input block w-full"
                      placeholder="Enter Your Email Address"
                      disabled={true}
                      value={me?.email}
                      name="email"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Phone
                    </span>
                    <input
                      type="tel"
                      className="input block w-full"
                      placeholder="Enter Your Phone"
                      value={phone || me?.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      City
                    </span>
                    <select
                      className="input block w-full"
                      value={city || me?.city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Select City</option>
                      {cities?.map((x) => (
                        <option key={x?._id} value={x?._id}>
                          {x?.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Postal
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your Postal"
                      value={postal || me?.postal}
                      onChange={(e) => setPostal(e.target.value)}
                      name="phone"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Password
                    </span>
                    <input
                      type="password"
                      className="input block w-full"
                      placeholder="Enter New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <label className="lg:col-span-2">
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Address
                    </span>
                    <textarea
                      className="input block h-auto w-full py-2"
                      placeholder="Enter Your Bio"
                      value={address || me?.address}
                      onChange={(e) => setAddress(e.target.value)}
                      cols={5}
                      name="bio"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
