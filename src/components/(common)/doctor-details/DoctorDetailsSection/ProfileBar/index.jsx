import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { urls } from "@/api/urls.js";

const ProfileBar = ({ lang, info }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-card shadow-custom-1">
      <div className="h-40 w-full bg-primary/5">
        <img
          src="/images/backgrounds/card-background.png"
          alt="background"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="px-4">
        <img
          className="relative mx-auto -mt-24 aspect-square w-full max-w-48 rounded-full border-8 border-card object-cover object-center"
          src={`${urls?.user_photos}/${info?.user?.photo}`}
          alt="doctor-profile-image"
        />
      </div>
      <div className="space-y-4 p-6 md:p-8">
        <div className="space-y-2 text-center">
          <h4 className="text-title/85">{info?.user?.name}</h4>
          <p>
            {info?.age} Years, {info?.gender}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {info?.user?.tags?.map((tag, index) => (
              <li
                key={index}
                className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary"
              >
                {lang === "en" ? tag.name : tag.name_bn}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="block">Email</span>
            <span className="block text-title/85">{info?.user?.email}</span>
          </div>
          <div className="space-y-1">
            <span className="block">Phone</span>
            <span className="block text-title/85">{info?.user?.phone}</span>
          </div>
          <div className="space-y-1">
            <span className="block">Experience</span>
            <span className="block text-title/85">
              {lang === "en" ? info?.experience : info?.experience_bn}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-2">
          <Button className="text-sm">
            <span>Book Appointment</span>
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
