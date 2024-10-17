import { Eye, EyeOff } from "@/assets/svg/icons/Eye";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsItem } from "@/components/ui/Tabs";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mutateSignIn } from "@/network/user/userApis.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";

const SignInPage = ({ lang }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: mutateSignIn,
  });
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync({ email, password });
      toast.success("Login Successful");
      localStorage.setItem("vella_user", JSON.stringify(response));
      if (response?.role === "parlor") {
        return navigate("/parlor/dashboard");
      } else {
        return navigate("/user/dashboard");
      }
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  return (
    <>
      <Tabs value={tab} setValue={setTab}>
        <TabsContent>
          <TabsItem value="email">
            <div className="w-full rounded-2xl bg-card text-base md:w-[32em] lg:w-[38em]">
              <div className="relative px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16">
                <div className="space-y-6">
                  <div className="rounded-md bg-primary px-4 py-4 text-center text-primary-foreground">
                    <span className="text-sm leading-none">
                      Sign in and access our all premium features!
                    </span>
                  </div>
                  <div className="space-y-4 text-center">
                    <h3 className="font-roboto font-black">
                      Sign in or to create an account
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      Not sure if you have an account? <br /> Enter your email
                      and we'll check for you.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label>
                        <span className="mb-2 inline-block text-sm font-medium text-title/85">
                          Email Address
                        </span>
                        <input
                          type="email"
                          className="input block h-10 w-full"
                          placeholder="Enter Your Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          required
                        />
                      </label>
                      <div className="text-center">
                        <Button
                          disabled={!email}
                          onClick={() =>
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
                            setTab("password")
                          }
                          className="w-full"
                          type="button"
                        >
                          <span>Continue</span>
                          <ArrowRight />
                        </Button>
                      </div>
                    </div>
                    {/*<div className="flex items-center gap-1">*/}
                    {/*  <hr className="flex-1" />*/}
                    {/*  <span>Or</span>*/}
                    {/*  <hr className="flex-1" />*/}
                    {/*</div>*/}
                    {/*<div className="space-y-2 text-center">*/}
                    {/*  <span className="block text-title/85">*/}
                    {/*    Sign up/in using*/}
                    {/*  </span>*/}
                    {/*  <div className="flex items-center justify-center gap-2">*/}
                    {/*    <Button*/}
                    {/*      className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"*/}
                    {/*      variant="none"*/}
                    {/*      size="none"*/}
                    {/*    >*/}
                    {/*      <GoogleColor />*/}
                    {/*    </Button>*/}
                    {/*    <Button*/}
                    {/*      className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"*/}
                    {/*      variant="none"*/}
                    {/*      size="none"*/}
                    {/*    >*/}
                    {/*      <FacebookColor />*/}
                    {/*    </Button>*/}
                    {/*    <Button*/}
                    {/*      className="inline-grid size-10 place-items-center rounded-full bg-muted text-2xl"*/}
                    {/*      variant="none"*/}
                    {/*      size="none"*/}
                    {/*    >*/}
                    {/*      <Apple />*/}
                    {/*    </Button>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            </div>
          </TabsItem>
          <TabsItem value="password">
            <div className="w-full rounded-2xl bg-card text-base md:w-[32em] lg:w-[38em]">
              <div className="relative px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16">
                <div className="space-y-6">
                  <div className="space-y-4 text-center">
                    <h3 className="font-roboto font-black">Welcome Back!</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      <span>{email}</span>{" "}
                      <span
                        onClick={() => setTab("email")}
                        className="cursor-pointer font-medium text-title/85 underline"
                      >
                        Change
                      </span>
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label>
                        <span className="mb-2 inline-block text-sm font-medium text-title/85">
                          Enter your password
                        </span>
                        <div className="relative flex w-full items-center">
                          <input
                            type={isPassVisible ? "text" : "password"}
                            className="input block h-10 w-full pr-12"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                      <div className="text-center">
                        <Button
                          isLoading={isPending}
                          disabled={isPending}
                          onClick={handleSignIn}
                          className="w-full"
                          type="submit"
                        >
                          <span>Sign In</span>
                          <ArrowRight />
                        </Button>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="cursor-pointer text-title/85 underline">
                        Reset your password
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsItem>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SignInPage;
