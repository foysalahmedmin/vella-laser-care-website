import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const ProfileBar = ({ lang }) => {
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
          src="/images/partials/doctor-profile.png"
          alt="doctor-profile-image"
        />
      </div>
      <div className="space-y-4 p-6 md:p-8">
        <div className="space-y-2 text-center">
          <h4 className="text-title/85">Prof. Dr. Tapan Kumar Saha</h4>
          <p>22 Years, Male</p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">
              Acne Treatmeant
            </li>
            <li className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">
              Repairing Damage
            </li>
            <li className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">
              Marks
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="block">Email</span>
            <span className="block text-title/85">Tapanjumar435@gmail.com</span>
          </div>
          <div className="space-y-1">
            <span className="block">Phone</span>
            <span className="block text-title/85">+8801689977665</span>
          </div>
          <div className="space-y-1">
            <span className="block">Experience</span>
            <span className="block text-title/85">4 Years</span>
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
