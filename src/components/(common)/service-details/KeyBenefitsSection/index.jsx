import { Sunflower } from "@/assets/svg/icons/Sunflower";

const KeyBenefitsSection = ({ info, lang }) => {
  return (
    <section className="md:pb-24">
      <section
        style={{
          backgroundImage: `url('/images/backgrounds/rectangle-background-1.png')`,
        }}
        className="w-full bg-cover bg-right-bottom bg-no-repeat pt-16 md:pt-24"
      >
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div className="relative md:-mb-24 lg:order-2">
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl">
                <img
                  className="absolute right-0 top-0 z-10 size-full object-cover"
                  src="/images/service-details/key-benefits.png"
                  alt=""
                />
              </div>
            </div>
            <div className="space-y-4 pb-16 md:pb-24 lg:order-1">
              <span className="block font-semibold text-primary">
                {lang === "en" ? "Key Benefits" : "Key Benefits"}
              </span>
              <h1 className="text-4xl">
                {lang === "en" ? info?.title : info?.title_bn}
              </h1>
              <p className="font-semibold md:text-lg">
                {lang === "en" ? info?.description : info?.description_bn}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {info?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-yellow-400 text-light">
                      <Sunflower />
                    </div>
                    <h5 className="text-lg font-black">
                      {lang === "en" ? benefit?.name : benefit?.name_bn}
                    </h5>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-red-400 text-light">
                    <Sunflower />
                  </div>
                  <h5 className="text-lg font-black">
                    Cruelty-Free <br /> Cosmetics
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default KeyBenefitsSection;
