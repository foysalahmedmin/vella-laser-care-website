import { Vector, VectorGroup } from "@/assets/svg/icons/Vector";

const BannerSection = ({ title }) => {
  return (
    <section className="relative bg-primary/5 py-16 md:py-24">
      <div>
        <VectorGroup className="absolute left-1/4 top-12 text-5xl text-primary/25" />
        <Vector className="absolute right-1/4 top-12 text-5xl text-primary/25" />
      </div>
      <div className="container z-10 space-y-10">
        <div className="max-w-2xl">
          <h1 className="capitalize">
            K-Beauty Exfoliation Guide: Gentle Methods For Glowing Skin
          </h1>
        </div>
        <div className="border-y border-primary/25">
          <div className="flex items-center justify-between gap-4 py-2 text-[0.625rem] md:text-base">
            <div className="flex items-center gap-2">
              <div className="size-10 shrink-0 overflow-hidden rounded-full">
                <img
                  className="object-cover object-center"
                  src="/images/partials/user.png"
                  alt=""
                />
              </div>
              <strong className="inline-block text-[1.125em] leading-none">
                Charlotte R
              </strong>
            </div>
            <div>
              <strong className="inline-block font-playfair text-[1.125em] leading-none">
                Published: November 22, 2023
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
