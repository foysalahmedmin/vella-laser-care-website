import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const SecondPart = () => {
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
              <h1 className="text-4xl">
                Register as Parlor Owner and <br />
                Earn Rewards
              </h1>
              <p className="font-semibold md:text-lg">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
                Text Ever Since.
              </p>
              <div className="pt-4">
                <Button>
                  <span>Register</span> <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SecondPart;
