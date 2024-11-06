import { Vector, VectorGroup } from "@/assets/svg/icons/Vector";
import { urls } from "@/api/urls.js";
import moment from "moment";

const BannerSection = ({ data }) => {
  return (
    <section className="relative bg-primary/5 py-16 md:py-24">
      <div>
        <VectorGroup className="absolute left-1/4 top-12 text-5xl text-primary/25" />
        <Vector className="absolute right-1/4 top-12 text-5xl text-primary/25" />
      </div>
      <div className="container z-10 space-y-10">
        <div className="max-w-2xl">
          <h1 className="capitalize">{data?.title}</h1>
        </div>
        <div className="border-y border-primary/25">
          <div className="flex items-center justify-between gap-4 py-2 text-[0.625rem] md:text-base">
            <div className="flex items-center gap-2">
              <div className="size-10 shrink-0 overflow-hidden rounded-full">
                <img
                  className="object-cover object-center"
                  src={`${urls?.user_photos}/${data?.writer?.photo}`}
                  alt=""
                />
              </div>
              <strong className="inline-block text-[1.125em] leading-none">
                {data?.writer?.name}
              </strong>
            </div>
            <div>
              <strong className="inline-block font-playfair text-[1.125em] leading-none">
                Published:{" "}
                {moment(new Date(data?.createdAt)).format("MMMM D, YYYY")}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
