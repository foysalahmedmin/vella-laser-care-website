import {
  ChevronRight,
  CopyrightIcon,
  Facebook,
  Instagram,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <>
      <footer className="dark border-t bg-dark text-dark-foreground">
        <div className="container py-12 md:py-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Logo className="text-3xl" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-12 overflow-hidden rounded-md">
                <img
                  className="size-full object-contain object-center"
                  src="/images/footer/1.png"
                  alt=""
                />
              </div>
              <div className="h-12 overflow-hidden rounded-md">
                <img
                  className="size-full object-contain object-center"
                  src="/images/footer/2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr className="my-12" />
          <div className="grid justify-between gap-8 gap-x-12 lg:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              {i18n?.language === "en" ? (
                <p>
                  At Vella Laser Care, we believe that everyone deserves to look
                  and feel their best. Our state-of-the-art laser treatments and
                  personalized skincare solutions are designed to rejuvenate,
                  restore, and enhance your natural beauty. With a team of
                  certified professionals and cutting-edge technology, we’re
                  committed to delivering safe, effective results tailored to
                  your unique needs. Your aesthetic dreams begin here. Visit us
                  today and experience the difference.
                </p>
              ) : (
                <p>
                  ভেলা লেজার কেয়ারে আমরা বিশ্বাস করি যে প্রত্যেকেই তারা তাদেরকে
                  সেরাভাবে দেখতে এবং অনুভব করতে চায়। আমাদের অত্যাধুনিক লেজার
                  চিকিৎসা এবং ব্যক্তিগতকৃত স্কিনকেয়ার সমাধানগুলি আপনার
                  প্রাকৃতিক সৌন্দর্যকে পুনরুজ্জীবিত, পুনরুদ্ধার এবং উন্নত করার
                  জন্য ডিজাইন করা হয়েছে। আমাদের সার্টিফাইড পেশাদারদের নিয়ে গড়া
                  একটি দল আছে, যারা অত্যাধুনিক প্রযুক্তির সাথে এবং আপনার অনন্য
                  প্রয়োজন অনুসারে নিরাপদ, কার্যকর ফলাফল সরবরাহ করতে
                  প্রতিশ্রুতিবদ্ধ। যেখানে আপনার নান্দনিক স্বপ্ন শুরু। আজই আমাদের
                  এখানে পরিদর্শন করুন এবং ভিন্ন একটা অভিজ্ঞতা অর্জন করুন।
                </p>
              )}

              <div className="flex items-center gap-4">
                <strong>
                  {i18n?.language === "en" ? "Follow Us:" : "অনুসরণ করুনঃ"}
                </strong>
                <ul className="flex items-center gap-2">
                  <li>
                    <Link
                      className="flex size-8 items-center justify-center rounded-full border bg-transparent"
                      to="https://www.facebook.com/vellalasercare?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="size-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex size-8 items-center justify-center rounded-full border bg-transparent"
                      to="https://www.instagram.com/vellalasercare/?igsh=MXBrOHF0ZWNoaW1iZg%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="size-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex size-8 items-center justify-center rounded-full border bg-transparent"
                      to="https://www.instagram.com/vellalasercare/?igsh=MXBrOHF0ZWNoaW1iZg%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="size-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="mb-4">
                <strong className="inline-block text-xl">
                  {i18n?.language === "en" ? "Support" : "সমর্থন"}
                </strong>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <ChevronRight className="size-4" />{" "}
                  <span>{i18n?.language === "en" ? "Shipping" : "শিপিং"}</span>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="size-4" />{" "}
                  <span>
                    {i18n?.language === "en"
                      ? "Return, Refund & Exchange"
                      : "রিটার্ন, রিফান্ড এবং এক্সচেঞ্জ নীতি"}
                  </span>
                </li>
                <li
                  onClick={() => navigate("/contact")}
                  className="flex cursor-pointer items-center gap-1 hover:text-primary"
                >
                  <ChevronRight className="size-4" />
                  <span>
                    {i18n?.language === "en"
                      ? "Help & Contact Us"
                      : "যোগাযোগ করুন"}
                  </span>
                </li>
                <li
                  onClick={() => navigate("/privacy_policy")}
                  className="flex cursor-pointer items-center gap-1 hover:text-primary"
                >
                  <ChevronRight className="size-4" />
                  <span>
                    {i18n?.language === "en" ? "Privacy Policy" : "নীতি"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4">
              <div className="mb-4">
                <strong className="inline-block text-xl">
                  {i18n?.language === "en"
                    ? "Get to Know Us"
                    : "আমাদের সম্পর্কে জানুন"}
                </strong>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-transparent">
                      <MapPin className="size-4" />
                    </span>
                    <span className="py-1">
                      Saptok Casiopia Flat No: E- 5, Lift: 02 House No: 35 Road:
                      27 Dhanmondi, Dhaka, Dhaka, Bangladesh, 1209.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-transparent">
                      <PhoneCall className="size-4" />
                    </span>
                    <span className="py-1">+8801958242004</span>
                  </li>
                </ul>
                <hr />
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-transparent">
                      <MapPin className="size-4" />
                    </span>
                    <span className="py-1">
                      Palazzo Primavera, Flat -6/A, Plot-106, Road- 12, Block
                      -E. Banani. Dhaka-1213. ( Besides Prescription Point),
                      Dhaka, Bangladesh, 1213
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-transparent">
                      <PhoneCall className="size-4" />
                    </span>
                    <span className="py-1">+8801789458924</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img
              className="mx-auto w-full max-w-[30rem] object-contain object-center md:max-w-[40rem] xl:max-w-[50rem]"
              src="/images/footer/payment-methots.png"
              alt="payment-methots"
            />
          </div>
        </div>
        <div className="border-t bg-card">
          <div className="container flex items-center justify-between px-4 py-4 text-center text-muted-foreground">
            <span className="flex items-center gap-1">
              <CopyrightIcon size={16} />
              <span>Copyright Rimel 2022. All right reserved</span>
            </span>
            <span className="flex items-center gap-1">
              <CopyrightIcon size={16} />
              <Link to="">Terms and conditions</Link>
              <span>/</span>
              <Link to="">Privacy and cookies</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
