import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { urls } from "@/api/urls.js";
import DoctorAppointmentModal from "@/components/partials/Modals/DoctorAppointmentModal/index.jsx";
import { useState } from "react";

const DoctorCard = ({ item, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { _id, name, photo, tags, description, description_bn, department } =
    item;
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
          src={`${urls?.user_photos}/${photo}`}
          alt={name}
        />
      </div>
      <div className="space-y-4 p-6 md:p-8">
        <div className="space-y-2">
          <h4 className="text-title/85">{name}</h4>
          {lang === "en" ? (
            <p className="font-semibold">
              {description.length > 100 ? (
                <span>{description.slice(0, 90)}...</span>
              ) : (
                <span>{description}</span>
              )}
            </p>
          ) : (
            <p className="font-semibold">
              {description_bn.length > 100 ? (
                <span>{description_bn.slice(0, 90)}...</span>
              ) : (
                <span>{description_bn}</span>
              )}
            </p>
          )}
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary"
            >
              {lang === "en" ? tag?.name : tag?.name_bn}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-2">
          <Button onClick={() => setIsOpen(true)} className="text-sm">
            {lang === "en" ? "Book Appointment" : "Book Appointment"}
            <ArrowUpRight className="size-4" />
          </Button>
          <Link to={`/doctor/${_id}`}>
            <Button className="text-sm">
              {lang === "en" ? "Details" : "Details"}
              <ArrowUpRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
      <DoctorAppointmentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        lang={lang}
        doc={_id}
        department={department}
      />
    </div>
  );
};

export default DoctorCard;
