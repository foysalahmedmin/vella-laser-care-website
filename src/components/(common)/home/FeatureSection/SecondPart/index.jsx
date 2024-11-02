import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import ParlorRegistrationModal from "@/components/partials/Modals/ParlorRegistrationModal/index.jsx";
import { useState } from "react";

const SecondPart = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="md:pt-24">
      <section
        style={{
          backgroundImage: `url('/images/backgrounds/rectangle-background-2.png')`,
        }}
        className="w-full bg-cover bg-left-top bg-no-repeat pb-16 md:pb-24"
      >
        <div className="container">
          <div className="grid items-end gap-16 lg:grid-cols-2">
            <div className="relative mt-8 md:-mt-12 lg:order-2">
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl">
                <img
                  className="absolute right-0 top-0 z-10 size-full object-cover"
                  src="/images/home/feature-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="space-y-4 pt-16 md:pt-24 lg:order-1">
              {lang === "en" ? (
                <h1 className="text-4xl">
                  Register as Parlor Owner and <br />
                  Earn Rewards
                </h1>
              ) : (
                <h1 className="text-4xl">
                  Register as Parlor Owner and <br />
                  Earn Rewards
                </h1>
              )}
              {lang === "en" ? (
                <p className="font-semibold md:text-lg">
                  Visit our registered beauty parlor and unlock exclusive
                  rewards! Enjoy top-notch skincare and beauty treatments while
                  earning loyalty points on every service. First-time visitors
                  receive special discounts, and referrals earn unique rewards.
                  Experience a new level of beauty and benefits—join us today
                  and transform your routine with exciting perks!
                </p>
              ) : (
                <p className="font-semibold md:text-lg">
                  Visit our registered beauty parlor and unlock exclusive
                  rewards! Enjoy top-notch skincare and beauty treatments while
                  earning loyalty points on every service. First-time visitors
                  receive special discounts, and referrals earn unique rewards.
                  Experience a new level of beauty and benefits—join us today
                  and transform your routine with exciting perks!
                </p>
              )}

              <div className="pt-4">
                <Button onClick={() => setIsOpen(true)}>
                  <span>{lang === "en" ? "Register" : "Register"}</span>{" "}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ParlorRegistrationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default SecondPart;
