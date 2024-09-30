import { Button } from "@/components/ui/Button";

const SecondPart = () => {
  return (
    <section className="md:pt-24">
      <section
        style={{
          backgroundImage: `url('/images/home/feature-background-2.png')`,
        }}
        className="w-full bg-cover bg-left-top bg-no-repeat py-16 md:pb-24"
      >
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative md:-mt-24 lg:order-2">
              <div className="relative aspect-[6/5] w-full">
                <img
                  className="absolute right-0 top-0 z-10 size-full object-contain"
                  src="/images/home/feature-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="space-y-4 md:pt-24 lg:order-1">
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
                <Button>Register</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SecondPart;
