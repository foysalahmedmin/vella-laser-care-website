import { Apple } from "@/assets/svg/icons/Apple";
import { Eye, EyeOff } from "@/assets/svg/icons/Eye";
import { FacebookColor } from "@/assets/svg/icons/Facebook";
import { GoogleColor } from "@/assets/svg/icons/Google";
import { Button } from "@/components/ui/Button";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [isPassVisible, setIsPassVisible] = useState(false);
  return (
    <>
      <div className="w-full rounded-2xl bg-card text-base md:w-[32em] lg:w-[38em]">
        <div className="relative px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16">
          <div className="space-y-6">
            <div className="rounded-md bg-primary px-4 py-4 text-center text-primary-foreground">
              <span className="text-sm leading-none">
                Sign up and get 10% off for New Users only!
              </span>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="font-roboto font-black">Create Your Account</h3>
              <p className="text-sm font-medium text-muted-foreground">
                <span className="cursor-pointer font-medium text-title/85 underline">
                  Change
                </span>
              </p>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Email Address*
                    </span>
                    <input
                      type="email"
                      className="input block w-full"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      required
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Phone*
                    </span>
                    <input
                      type="tel"
                      className="input block w-full"
                      placeholder="Enter Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      required
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Address*
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Postal Code*
                    </span>
                    <input
                      type="text"
                      className="input block w-full"
                      name="postal-code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                  </label>
                  <label className="lg:col-span-2">
                    <span className="mb-2 inline-block text-sm font-medium text-title/85">
                      Enter your password*
                    </span>
                    <div className="relative flex w-full items-center">
                      <input
                        type={isPassVisible ? "text" : "password"}
                        className="input block h-10 w-full pr-12"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                        name="password"
                        required
                      />
                      <Toggle
                        isOn={isPassVisible}
                        setIsOn={setIsPassVisible}
                        className="absolute bottom-0 right-[1em] top-0 grid h-full place-items-center"
                      >
                        <ToggleTrigger className="rounded-full bg-transparent text-xl">
                          <ToggleOnComp className="text-foreground/75 hover:text-primary">
                            <Eye />
                          </ToggleOnComp>
                          <ToggleOffComp className="text-foreground/75 hover:text-primary">
                            <EyeOff />
                          </ToggleOffComp>
                        </ToggleTrigger>
                      </Toggle>
                    </div>
                  </label>
                </div>
                <div>
                  <label className="inline-flex w-full items-start gap-2">
                    <input
                      type="checkbox"
                      className="checkbox primary mt-1 inline-block shrink-0 text-lg"
                    />
                    <span className="flex-1 text-muted-foreground">
                      Consent to receive information on exclusive deals,
                      discounts and latest skincare news
                    </span>
                  </label>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    Please read our{" "}
                    <Link className="font-medium text-title/85 underline">
                      privacy policy
                    </Link>{" "}
                    for more details.
                  </span>
                </div>
                <div className="text-center">
                  <Button className="w-full" type="submit">
                    <span>Register</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </form>
            </div>
            <div className="space-y-2 text-center">
              <span className="block text-title/85">Sign up/in using</span>
              <div className="flex items-center justify-center gap-2">
                <Button
                  className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"
                  variant="none"
                  size="none"
                >
                  <GoogleColor />
                </Button>
                <Button
                  className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"
                  variant="none"
                  size="none"
                >
                  <FacebookColor />
                </Button>
                <Button
                  className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"
                  variant="none"
                  size="none"
                >
                  <Apple />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <hr className="flex-1" />
              <span>Or</span>
              <hr className="flex-1" />
            </div>
            <div className="text-center">
              <Button
                className="w-full bg-muted text-foreground hover:bg-muted/75"
                type="submit"
              >
                <span>Continue as guest </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
