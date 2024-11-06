import { BadgeCheckOutline } from "@/assets/svg/icons/Badge";
import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";

const FirstPart = ({ lang }) => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/backgrounds/rectangle-background-1.png')`,
      }}
      className="w-full bg-cover bg-right-bottom bg-no-repeat py-16 md:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[6/5] w-full">
              <img
                className="absolute right-0 top-0 z-10 h-5/6 object-cover"
                src="/images/home/feature-1-1.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-0 h-5/6 object-cover"
                src="/images/home/feature-1-2.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <span className="block font-semibold text-primary">
                {lang === "en" ? "Step Inside" : "ভিতরের প্রবেশ করুন"}
              </span>
              {lang === "en" ? (
                <h1 className="text-4xl">
                  Unlock your true beauty with cutting-edge treatments <br /> at
                  Vella Laser Care
                </h1>
              ) : (
                <h1 className="text-4xl">
                  অত্যাধুনিক চিকিৎসার মাধ্যমে আপনার ত্বকের আসল সৌন্দর্য উন্মোচন
                  করুন -
                  <br /> ভেলা লেজার কেয়ারে
                </h1>
              )}
              <p className="font-semibold md:text-lg">
                {lang === "en"
                  ? "Our expert team offers personalized skincare solutions to help you achieve radiant, flawless skin. From rejuvenating facials to advanced laser therapy, your aesthetic dreams begin here. Visit us today and step into a world of confidence and beauty!"
                  : "আমাদের বিশেষজ্ঞ দল আপনাকে উজ্জ্বল, অটুট ত্বক অর্জনে সহায়তা করার জন্য ব্যক্তিগতকৃত স্কিনকেয়ার সমাধান অফার করে। এখানে আপনার নান্দনিক স্বপ্নের  শুরুটাই হয় আয়ুর্বর্ধক ফেসিয়াল থেকে উন্নত লেজার থেরাপি মাধ্যমে। আজ আমাদের এখানে পরিদর্শন করুন এবং পদার্পণ করুন আত্মবিশ্বাস এবং সৌন্দর্যের জগতে।"}
              </p>
              <ul className="flex items-center justify-between">
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en" ? "Illuminating Beauty" : "অপরূপ সৌন্দর্য"}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en" ? "Timeless Elegance" : "অফুরন্ত কমনীয়তা"}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en" ? "Unique Glow" : "অনন্য উজ্জ্বলতা"}
                  </span>
                </li>
              </ul>
              <div className="py-4">
                <Button>
                  <span>
                    {lang === "en"
                      ? "Book an appointment"
                      : "অ্যাপয়েন্টমেন্ট বুক করুন"}
                  </span>
                  <CalendarCheck strokeWidth={3} className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPart;
