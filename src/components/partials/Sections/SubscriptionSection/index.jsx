import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AddSubscription } from "@/network/common/commonApis.js";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";

const SubscriptionSection = ({ className, lang }) => {
  const [email, setEmail] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: AddSubscription,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) return toast.error("Please fill all fields");
      const status = await mutateAsync({ email });
      toast.success(status?.message);
      setEmail("");
    } catch (e) {
      toast.error(errorMessage(e));
    }
  };
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="rounded-xl bg-gradient-to-r from-primary to-primary/50 px-16 py-12">
          <div className="grid items-center justify-between gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h3 className="dark text-title">
                {lang === "en"
                  ? "Stay up to date with the best of Vella Laser Care"
                  : "ভেলা লেজার কেয়ারের সেরা সম্পর্কে আপ টু ডেট থাকুন"}
              </h3>
              {lang === "en" ? (
                <p className="dark text-foreground">
                  Subscribe for the latest skincare trends, exciting new
                  products
                  <br />
                  and exclusive services
                </p>
              ) : (
                <p className="dark text-foreground">
                  স্কিন কেয়ার পণ্য এবং পরিষেবার জন্য সদস্যতা নিন
                </p>
              )}
            </div>
            <div className="lg:col-span-5">
              <form action="" className="input w-full border-r-0 bg-card px-0">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    lang === "en" ? "Enter your email" : "আপনার ইমেইল লিখুন"
                  }
                  className="flex-1 border-none bg-transparent px-4 text-sm outline-none"
                />
                <Button
                  onClick={handleSubmit}
                  isLoading={isPending}
                  disabled={isPending}
                  type="submit"
                >
                  {lang === "en" ? "Subscribe" : "জমা দিন"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
