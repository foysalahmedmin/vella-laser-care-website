import { Button } from "@/components/ui/Button";
import { Edit, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");

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
                  Robert Fox
                </span>
                <p>AVA Studio</p>
                <span className="flex items-center gap-1">
                  <MapPin className="size-5 text-primary" />
                  <span className="leading-none">Leeds, United Kingdom</span>
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
                      First Name
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      name="first-name"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Last Name
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      name="last-name"
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
                      value={email}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                    />
                  </label>
                  <label className="lg:col-span-2">
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Bio
                    </span>
                    <textarea
                      className="input block h-auto w-full py-2"
                      placeholder="Enter Your Bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      cols={5}
                      name="bio"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border p-8 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <h3>Address</h3>
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
                      Country
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your Country Name"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      name="country"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Last Name
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your Street Name"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      name="street"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      City
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your City Name"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      name="city"
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Post Code
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      placeholder="Enter Your City Name"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      name="post-code"
                    />
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
