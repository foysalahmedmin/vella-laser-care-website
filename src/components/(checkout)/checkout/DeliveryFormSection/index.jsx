import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  SetCartAddress,
  SetCartCity,
  SetCartEmail,
  SetCartName,
  SetCartPhone,
  SetCartPostal,
  ToggleAsProfile,
} from "@/redux/slices/cartSlice.js";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredCities } from "@/network/common/commonApis.js";
import { fetchMe } from "@/network/user/userApis.js";

const DeliveryFormSection = ({ className }) => {
  const dispatch = useDispatch();
  const { email, name, city, address, postal, phone, as_profile } = useSelector(
    (state) => state.cart,
  );
  const { _ } = useQuery({
    queryKey: ["me", as_profile],
    queryFn: async () => {
      const data = await fetchMe();
      dispatch(SetCartEmail(data?.email));
      dispatch(SetCartName(data?.name));
      dispatch(SetCartCity(data?.city));
      dispatch(SetCartAddress(data?.address));
      dispatch(SetCartPostal(data?.postal));
      dispatch(SetCartPhone(data?.phone));
      return data;
    },
  });
  const { data: cities } = useQuery({
    queryKey: ["filtered_cities"],
    queryFn: () => fetchFilteredCities(),
  });
  return (
    <section className={cn("space-y-8", className)}>
      <div className="rounded-md bg-card p-4">
        <div className="space-y-6">
          <strong className="block font-medium uppercase">
            2. DELIVERY ADDRESS
          </strong>
          <form className="space-y-4 text-sm">
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Email*
                </span>
                <input
                  value={email}
                  disabled={as_profile}
                  onChange={(e) => dispatch(SetCartEmail(e.target.value))}
                  type="email"
                  className="input block h-10 w-full text-xs"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Name*
                </span>
                <input
                  type="text"
                  value={name}
                  disabled={as_profile}
                  onChange={(e) => dispatch(SetCartName(e.target.value))}
                  className="input block h-10 w-full text-xs"
                  placeholder="Enter Your First Name"
                  name="first-name"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  City/Town*
                </span>
                <div className="input block h-auto w-full text-xs">
                  <select
                    className="h-10 w-full border-none text-xs outline-none"
                    name="city"
                    disabled={as_profile}
                    value={city}
                    onChange={(e) => dispatch(SetCartCity(e.target.value))}
                    required
                  >
                    <option value="">Select City/Town</option>
                    {cities?.map((x, i) => (
                      <option key={i} value={x?._id}>
                        {x?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Delivery address**
                </span>
                {/*<input*/}
                {/*  type="text"*/}
                {/*  className="input block h-10 w-full text-xs"*/}
                {/*  placeholder="Enter Your Address"*/}
                {/*  name="delivery-address*"*/}
                {/*  required*/}
                {/*/>*/}
                <input
                  type="text"
                  value={address}
                  disabled={as_profile}
                  onChange={(e) => dispatch(SetCartAddress(e.target.value))}
                  className="input mt-2 block h-10 w-full text-xs"
                  placeholder="Apartment, suit, unit"
                  name="delivery-address-optional"
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Postcode/ZIP Code*
                </span>
                <input
                  type="text"
                  value={postal}
                  disabled={as_profile}
                  onChange={(e) => dispatch(SetCartPostal(e.target.value))}
                  className="input block h-10 w-full text-xs"
                  placeholder="Enter Your Postcode/ZIP Code"
                  name="postcode"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Phone*
                </span>
                <div className="input h-auto w-full text-xs">
                  <img
                    className="size-6 rounded object-contain object-center"
                    src="/images/flags/bd.svg"
                    alt="flag"
                  />
                  <input
                    type="tel"
                    value={phone}
                    disabled={as_profile}
                    onChange={(e) => dispatch(SetCartPhone(e.target.value))}
                    className="h-10 w-full flex-1 border-none text-xs outline-none"
                    placeholder="Enter Your Phone Number"
                    name="Phone"
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  className="checkbox primary text-xl"
                  value={as_profile}
                  checked={as_profile}
                  onChange={() => dispatch(ToggleAsProfile())}
                  type="checkbox"
                />
                <span className="inline-block text-sm font-medium capitalize leading-none text-title">
                  Use as profile address
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFormSection;
