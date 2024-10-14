import {
  Discount,
  FollowUp,
  MoneyBag,
} from "@/assets/svg/icons/DashboardBanner";

const BannerSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${"/images/backgrounds/dashboard-banner-background.png"})`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-background/50 backdrop-blur">
        <div className="container md:pb-16">
          <div className="flex size-full items-center px-8">
            <div className="flex w-full items-center justify-center gap-6 py-12 md:justify-between md:py-0">
              <div className="max-w-xl text-center md:max-w-2xl md:basis-1/2 md:text-left">
                <div>
                  <span className="my-0 mb-4 inline-block border-primary text-base font-bold capitalize text-primary md:text-lg">
                    Welcome Onboard, Aparupa Parlour
                  </span>
                  <h1 className="font-playfair text-4xl font-black capitalize lg:text-5xl">
                    Manage Parlor <br />
                    Hassle-free With Us
                  </h1>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-left lg:max-w-lg">
                  <div className="space-y-1">
                    <Discount className="text-3xl lg:text-5xl" />
                    <strong className="block text-sm lg:text-lg">
                      Get Commission
                    </strong>
                  </div>
                  <div className="space-y-1">
                    <MoneyBag className="text-3xl lg:text-5xl" />
                    <strong className="block text-sm lg:text-lg">
                      Track earning
                    </strong>
                  </div>
                  <div className="space-y-1">
                    <FollowUp className="text-3xl lg:text-5xl" />
                    <strong className="block text-sm lg:text-lg">
                      Order Follow up
                    </strong>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-80 basis-1/2 md:block md:h-[20rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[36rem]">
                <img
                  className="mx-auto size-full object-contain object-center"
                  src="/images/parlors/dashboard-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
