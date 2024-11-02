import {
  ChevronRight,
  CopyrightIcon,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
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
          <div className="grid justify-between gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-4 xl:col-span-6">
              <p>
                At Vella Laser Care, we believe that everyone deserves to look
                and feel their best. Our state-of-the-art laser treatments and
                personalized skincare solutions are designed to rejuvenate,
                restore, and enhance your natural beauty. With a team of
                certified professionals and cutting-edge technology, we’re
                committed to delivering safe, effective results tailored to your
                unique needs. Your aesthetic dreams begin here. Visit us today
                and experience the difference.
              </p>
              <div className="flex items-center gap-4">
                <strong>Follow Us:</strong>
                <ul className="flex items-center gap-2">
                  <li>
                    <Link
                      className="flex size-6 items-center justify-center rounded-full border bg-transparent"
                      to=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="size-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex size-6 items-center justify-center rounded-full border bg-transparent"
                      to=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="size-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex size-6 items-center justify-center rounded-full border bg-transparent"
                      to=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="size-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex size-6 items-center justify-center rounded-full border bg-transparent"
                      to=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="size-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 md:col-span-4 xl:col-span-3">
              <div className="mb-4">
                <strong className="inline-block text-xl">Support</strong>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <ChevronRight size={16} /> <span>Shipping</span>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight size={16} /> <span>Help & Contact Us</span>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight size={16} />{" "}
                  <span>Return, Refund & Exchange policy</span>
                </li>
              </ul>
            </div>
            <div className="px-4 md:col-span-4 xl:col-span-3">
              <div className="mb-4">
                <strong className="inline-block text-xl">Get to Know Us</strong>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <span className="flex size-6 items-center justify-center rounded-full border bg-transparent">
                    <MapPin className="size-4" />
                  </span>
                  <span>76 Lotas Kamal Tower Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="flex size-6 items-center justify-center rounded-full border bg-transparent">
                    <PhoneCall className="size-4" />
                  </span>
                  <span>+01687677554</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="flex size-6 items-center justify-center rounded-full border bg-transparent">
                    <PhoneCall className="size-4" />
                  </span>
                  <span>+01687677554</span>
                </li>
              </ul>
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
