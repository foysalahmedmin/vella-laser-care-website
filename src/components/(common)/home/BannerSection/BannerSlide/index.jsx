import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ParlorRegistrationModal from "@/components/partials/Modals/ParlorRegistrationModal/index.jsx";

const BannerSlide = ({ item, lang }) => {
  const {
    title,
    title_bn,
    subTitle,
    subTitleBn,
    description,
    image,
    button,
    isRegister,
  } = item;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-30 size-full">
      <div className="container">
        <div className="flex size-full items-center px-8">
          <div className="flex w-full items-center justify-center gap-6 py-12 md:justify-between md:py-0">
            <div className="max-w-xl text-center md:max-w-2xl md:basis-1/2 md:text-left">
              <div>
                {subTitle && (
                  <h3 className="my-0 mb-4 inline-block border-primary text-base font-bold capitalize text-primary md:text-lg">
                    {lang === "en" ? subTitle : subTitleBn}
                  </h3>
                )}
                {title && (
                  <h1 className="font-playfair text-4xl font-black capitalize lg:text-5xl">
                    {lang === "en" ? title : title_bn}
                  </h1>
                )}
              </div>
              {button?.label && button?.path && (
                <div className="mt-10">
                  {!isRegister && (
                    <Link to={button?.path || "#"}>
                      <Button>
                        {lang === "en" ? button?.label : button?.label_bn}
                        {button?.icon && (
                          <button.icon strokeWidth={3} className="size-4" />
                        )}
                      </Button>
                    </Link>
                  )}
                  {isRegister && (
                    <div>
                      <Button onClick={() => setIsOpen(true)}>
                        {lang === "en"
                          ? "Request as a Parlor"
                          : "একটি পার্লার হিসাবে অনুরোধ"}
                        {button?.icon && (
                          <button.icon strokeWidth={3} className="size-4" />
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative hidden h-80 basis-1/2 md:block md:h-[20rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[36rem]">
              {image?.src && (
                <img
                  className="mx-auto size-full object-contain object-center"
                  src={image?.src}
                  alt={image?.alt}
                  loading="lazy"
                />
              )}
              <img
                src={"/images/home/home-banner-back-image.png"}
                alt="image"
                loading="lazy"
                className="absolute inset-0 -z-10 mx-auto mt-auto h-[50vw] origin-center delay-1000 md:h-[90%] [&_p]:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
      <ParlorRegistrationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default BannerSlide;
