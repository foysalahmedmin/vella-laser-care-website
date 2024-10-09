import { cn } from "@/lib/utils";

const DeliveryFormSection = ({ className }) => {
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
                  First Name*
                </span>
                <input
                  type="text"
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
                  Last Name*
                </span>
                <input
                  type="text"
                  className="input block h-10 w-full text-xs"
                  placeholder="Enter Your Last Name"
                  name="last-name"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Country*
                </span>
                <div className="input block h-auto w-full text-xs">
                  <select
                    className="h-10 w-full border-none text-xs outline-none"
                    name="country"
                    required
                  >
                    <option value="">Select Country</option>
                    <option>Bangladesh</option>
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Delivery address**
                </span>
                <input
                  type="text"
                  className="input block h-10 w-full text-xs"
                  placeholder="Enter Your Address"
                  name="delivery-address*"
                  required
                />
                <input
                  type="text"
                  className="input mt-2 block h-10 w-full text-xs"
                  placeholder="Apartment, suit, unit (Optional)"
                  name="delivery-address-optional"
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
                    required
                  >
                    <option value="">Select City/Town</option>
                    <option>Dhaka</option>
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Postcode/ZIP Code*
                </span>
                <input
                  type="text"
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
                <input className="checkbox primary text-xl" type="checkbox" />
                <span className="inline-block text-sm font-medium capitalize leading-none text-title">
                  Use as billing address
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
