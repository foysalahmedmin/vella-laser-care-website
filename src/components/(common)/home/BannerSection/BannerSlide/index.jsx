import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const BannerSlide = ({ item }) => {
  const { title, subTitle, description, image, button } = item;
  return (
    <div className="relative z-30 size-full">
      <div className="container">
        <div className="flex size-full items-center px-8">
          <div className="flex w-full items-center justify-center gap-6 py-12 md:justify-between md:py-0">
            <div className="max-w-xl text-center md:max-w-2xl md:basis-1/2 md:text-left">
              <div>
                {subTitle && (
                  <h3 className="my-0 mb-4 inline-block border-primary text-base font-bold capitalize text-primary md:text-lg">
                    {subTitle}
                  </h3>
                )}
                {title && (
                  <h1 className="font-playfair text-4xl font-black capitalize lg:text-5xl">
                    {title}
                  </h1>
                )}
              </div>

              {/* {description && <p className="mb-6">{description}</p>} */}
              {button?.label && button?.path && (
                <div className="mt-10">
                  <Link to={button?.path || "#"}>
                    <Button>
                      {button?.label}
                      {button?.icon && (
                        <button.icon strokeWidth={3} className="size-4" />
                      )}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="relative hidden h-80 basis-1/2 md:block md:h-[20rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[36rem]">
              {image?.src && (
                <img
                  className="mx-auto size-full object-contain object-center"
                  src={image?.src}
                  alt={image?.alt}
                />
              )}
              <img
                src={"/images/home/home-banner-back-image.png"}
                className="absolute inset-0 -z-10 mx-auto mt-auto h-[50vw] origin-center delay-1000 md:h-[90%] [&_p]:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
