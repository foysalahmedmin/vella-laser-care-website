import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${"/images/backgrounds/dashboard-banner-background.png"})`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="grid min-h-screen-minus-combined-header place-items-center bg-background/50 backdrop-blur">
        <div className="container md:pb-24">
          <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-24">
            <div className="h-fit w-full bg-primary/15 px-6 py-8 text-center sm:px-8 sm:py-12 md:py-16">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <span className="block font-medium text-primary">
                    Largest and Latest Collection of Bangladeshi skincare
                  </span>
                  <h1 className="text-4xl lg:text-5xl">
                    Largest Collection <br />
                    of Bangladeshi Skincare
                  </h1>
                </div>
                <div>
                  <Link to="/shop">
                    <Button asChild={true}>
                      <span>Shop All</span> <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
