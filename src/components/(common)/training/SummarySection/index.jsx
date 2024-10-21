import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";
import ReactPlayer from "react-player";

const SummarySection = ({ info, lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <div className="relative aspect-[6/4] w-full max-w-xl overflow-hidden rounded-2xl">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=aDlv2UX1lA8"
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <span className="block font-semibold text-primary">
                Embrace the Art of Lash Extensions
              </span>
              <h1 className="text-4xl">Certificate in Eyelash Extensions</h1>
              <p className="font-semibold md:text-lg">
                Dive into our online Eyelash Extensions course for lash mastery
                that speaks volumes.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded bg-primary/15 px-2 py-1 text-primary">
                  <span className="inline-block font-semibold">
                    Lash kit included
                  </span>
                </li>
                <li className="rounded bg-primary/15 px-2 py-1 text-primary">
                  <span className="inline-block font-semibold">
                    From $35/week
                  </span>
                </li>
                <li className="rounded bg-primary/15 px-2 py-1 text-primary">
                  <span className="inline-block font-semibold">
                    Course language: English
                  </span>
                </li>
              </ul>
              <div className="py-4">
                <Button>
                  <span>Enroll now</span>
                  <CalendarCheck strokeWidth={2} className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
