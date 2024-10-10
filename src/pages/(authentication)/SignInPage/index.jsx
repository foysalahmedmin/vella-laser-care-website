import { Apple } from "@/assets/svg/icons/Apple";
import { FacebookColor } from "@/assets/svg/icons/Facebook";
import { GoogleColor } from "@/assets/svg/icons/Google";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsItem } from "@/components/ui/Tabs";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const SignInPage = ({ lang }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Tabs>
        <TabsContent>
          <TabsItem>
            <div className="w-full rounded-2xl bg-card text-base md:w-[32em] lg:w-[38em]">
              <div className="relative px-8 py-8 md:px-16 md:py-12 lg:px-24 lg:py-16">
                <div className="space-y-6">
                  <div className="rounded-md bg-primary px-4 py-4 text-center text-primary-foreground">
                    <span className="text-sm leading-none">
                      Sign up and get 10% off for New Users only!
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
                  <div>
                    <div className="space-y-6">
                      <form className="space-y-4">
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
                          <Button className="w-full" type="submit">
                            <span>Continue</span>
                            <ArrowRight />
                          </Button>
                        </div>
                      </form>
                      <div className="flex items-center gap-1">
                        <hr className="flex-1" />
                        <span>Or</span>
                        <hr className="flex-1" />
                      </div>
                      <div className="space-y-2 text-center">
                        <span className="block text-title/85">
                          Sign up/in using
                        </span>
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
