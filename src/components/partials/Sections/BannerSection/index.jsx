import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BannerSection = ({
  backgroundImage = "/images/backgrounds/banner-background.png",
  className,
  title,
  description,
  breadcrumbItems,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={cn(
        "relative bg-cover bg-center bg-no-repeat py-16",
        className,
      )}
    >
      <div className="container">
        <div className="space-y-2 text-center">
          <h3 className="capitalize">{title}</h3>
          {breadcrumbItems.length > 0 && (
            <ul className="inline-flex items-center gap-2">
              {breadcrumbItems.map((item, index) => (
                <li className="inline-flex items-center gap-2" key={index}>
                  <Link to={item?.link}>{item?.label}</Link>
                  {index !== breadcrumbItems.length - 1 && (
                    <ChevronRight size={20} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
