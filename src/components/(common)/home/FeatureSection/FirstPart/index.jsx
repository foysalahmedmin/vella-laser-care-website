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
                {lang === "en" ? "Step Inside" : "Step Inside"}
              </span>
              {lang === "en" ? (
                <h1 className="text-4xl">
                  Unlock your true beauty with cutting-edge treatments <br /> at
                  Vella Laser Care
                </h1>
              ) : (
                <h1 className="text-4xl">
                  আধুনিক ট্রিটমেন্টে উন্মোচন করুন আপনার সত্যিকারের সৌন্দর্য{" "}
                  <br /> েলা লেজার কেয়ার
                </h1>
              )}
              <p className="font-semibold md:text-lg">
                {lang === "en"
                  ? "Our expert team offers personalized skincare solutions to help you achieve radiant, flawless skin. From rejuvenating facials to advanced laser therapy, your aesthetic dreams begin here. Visit us today and step into a world of confidence and beauty!"
                  : "আমাদের বিশেষজ্ঞ দল আপনাকে উজ্জ্বল, নিখুঁত ত্বক পেতে ব্যক্তিগত যত্নের সমাধান প্রদান করে। পুনরুজ্জীবনকারী ফেসিয়াল থেকে শুরু করে আধুনিক লেজার থেরাপি পর্যন্ত, আপনার সৌন্দর্যের স্বপ্নের যাত্রা শুরু হোক এখান থেকেই। আজই আমাদের কাছে আসুন এবং আত্মবিশ্বাস ও সৌন্দর্যের এক নতুন জগতে প্রবেশ করুন!"}
              </p>
              <ul className="flex items-center justify-between">
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en"
                      ? "Illuminating Beauty"
                      : "Illuminating Beauty"}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en" ? "Timeless Elegance" : "Timeless Elegance"}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    {lang === "en" ? "Unique Glow" : "Unique Glow"}
                  </span>
                </li>
              </ul>
              <div className="py-4">
                <Button>
                  <span>
                    {lang === "en"
                      ? "Book an appointment"
                      : "Book an appointment"}
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
