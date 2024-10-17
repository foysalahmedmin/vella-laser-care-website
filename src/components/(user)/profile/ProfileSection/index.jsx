import { Button } from "@/components/ui/Button";
import { Edit, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { fetchMe } from "@/network/user/userApis.js";
import { fetchFilteredCities } from "@/network/common/commonApis.js";

const ProfileSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const { isAuthenticated } = useUser();
  const { data: me } = useQuery({
    queryKey: ["me", isAuthenticated],
    queryFn: () => fetchMe(),
  });
  const { data: cities } = useQuery({
    queryKey: ["filtered_cities"],
    queryFn: () => fetchFilteredCities(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-6 rounded-2xl px-8 py-16 shadow-custom-1 md:space-y-8 md:px-16 lg:px-24">
          <div className="rounded-2xl border p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="relative size-24 shrink-0 rounded-full border-4 border-card">
                <img
                  className="size-full object-cover object-center"
                  src="/images/partials/user.png"
                  alt=""
                />
                <label className="absolute bottom-0 right-0 inline-flex size-8 cursor-pointer items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground">
                  <input className="hidden" type="file" accept="image/*" />
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
              <Button className="px-2" size="sm">
                <Edit className="size-4" />
                <span>Edit</span>
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
                      placeholder="Enter Your Name"
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
                      value={email || me?.email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      name="city"
                    >
                      <option value="">Select</option>
                      {cities?.map((x, i) => (
                        <option key={i} value={x?._id}>
                          {x?.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div>
            Forgot password?{" "}
            <Link className="font-medium text-primary underline">
              Reset password
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
