import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { errorMessage } from "@/helpers/error.js";
import {
  AddAppointment,
  fetchDoctorSlots,
  fetchFilteredDepartments,
  fetchFilteredDoctors,
} from "@/pages/(common)/HomePage/homeApis.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Calendar, Send } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";

const ConsultationScheduleSection = ({ lang }) => {
  const [name, setName] = useState("");
  const [appointment_type, setAppointmentType] = useState("online");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: () => fetchFilteredDepartments(),
  });
  const { data: doctors } = useQuery({
    queryKey: ["filtered_doctors", department],
    queryFn: () => fetchFilteredDoctors(department),
    enabled: !!department,
  });
  const { data: slots } = useQuery({
    queryKey: ["filtered_slots", doctor],
    queryFn: () =>
      fetchDoctorSlots(
        doctor,
        moment(new Date(date)).format("dddd")?.toLocaleLowerCase(),
      ),
    enabled: !!date && !!doctor,
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: AddAppointment,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !name ||
        !appointment_type ||
        !department ||
        !doctor ||
        !email ||
        !phone ||
        !date ||
        !slot
      ) {
        return toast.error("Please fill all fields");
      }
      const status = await mutateAsync({
        name,
        appointment_type,
        department,
        doctor,
        email,
        phone,
        date,
        slot,
        message,
      });
      console.log(status);
      if (appointment_type === "online") {
        setName("");
        setAppointmentType("online");
        setDepartment("");
        setDoctor("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        window.location.replace(status);
      } else {
        setName("");
        setAppointmentType("online");
        setDepartment("");
        setDoctor("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        toast.success(status?.message);
      }
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  return (
    <section>
      <div className="container">
        <div
          style={{
            backgroundImage:
              "url('/images/home/consultation-schedule-background.png')",
          }}
          className="h-[25rem] rounded-xl bg-cover bg-top bg-no-repeat"
        />
        <div className="relative -mt-[25rem]">
          <div className="px-16 pt-16 md:px-24 xl:px-32">
            <SectionTitle>
              <Title>
                {lang === "en"
                  ? "Schedule a Consultation"
                  : "Schedule a Consultation"}
              </Title>
              {lang === "en" ? (
                <Description>
                  We're thrilled you're interested in joining our campaign!
                  Please fill out <br /> the form below to get started.
                </Description>
              ) : (
                <Description>
                  We're thrilled you're interested in joining our campaign!
                  Please fill out <br /> the form below to get started.
                </Description>
              )}
            </SectionTitle>
            <div className="overflow-hidden rounded-xl bg-card shadow-custom-1">
              <div className="flex">
                <div className="flex-1 self-stretch p-10">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          {lang === "en" ? "Name" : "নাম"}
                        </span>
                        <input
                          type="text"
                          className="input block w-full rounded-full"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={
                            lang === "en"
                              ? "Enter Your Name"
                              : "আপনার নাম লিখুন"
                          }
                          name="name"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Appointment type
                        </span>
                        <div className="flex items-center gap-4 py-2">
                          <label className="inline-flex cursor-pointer items-center gap-2">
                            <input
                              className="radio text-lg"
                              type="radio"
                              name="appointment-type"
                              value="online"
                              checked={appointment_type === "online"}
                              onChange={(e) =>
                                setAppointmentType(e.target.value)
                              }
                            />
                            <span className="inline-block font-medium text-title">
                              Online
                            </span>
                          </label>
                          <label className="inline-flex cursor-pointer items-center gap-2">
                            <input
                              className="radio text-lg"
                              type="radio"
                              name="appointment-type"
                              value="offline"
                              checked={appointment_type === "offline"}
                              onChange={(e) =>
                                setAppointmentType(e.target.value)
                              }
                            />
                            <span className="inline-block font-medium text-title">
                              Offline
                            </span>
                          </label>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Department
                        </span>
                        <div className="input block w-full rounded-full">
                          <select
                            className="h-8 w-full border-none outline-none"
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                          >
                            <option value="">Select Department</option>
                            {departments?.map((x, i) => (
                              <option key={i} value={x?._id}>
                                {x?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Doctor
                        </span>
                        <div className="input block w-full rounded-full">
                          <select
                            className="h-8 w-full border-none outline-none"
                            name="location"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            required
                          >
                            <option value="">Select Location</option>
                            {doctors?.map((x, i) => (
                              <option key={i} value={x?._id}>
                                {x?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Email
                        </span>
                        <input
                          type="email"
                          className="input block w-full rounded-full"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Phone
                        </span>
                        <input
                          type="tel"
                          className="input block w-full rounded-full"
                          placeholder="Enter Your Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          name="phone"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Date
                        </span>
                        <div className="input w-full flex-1 rounded-full">
                          <Calendar
                            className="cursor-pointer"
                            onClick={(e) => {
                              const dateInput = e.target?.nextElementSibling;
                              if (dateInput && dateInput.type === "date") {
                                dateInput.showPicker();
                              }
                            }}
                          />
                          <input
                            type="date"
                            className="icon-none h-8 w-full border-none outline-none"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                          />
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-medium text-title">
                          Slot
                        </span>
                        <div className="input block w-full rounded-full">
                          <select
                            className="h-8 w-full border-none outline-none"
                            value={slot}
                            onChange={(e) => setSlot(e.target.value)}
                            required
                          >
                            <option value="">Select Slot</option>
                            {slots?.map((x, i) => (
                              <option key={i} value={x?._id}>
                                {x?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </label>
                      <label className="col-span-2">
                        <span className="mb-2 inline-block font-medium text-title">
                          Message
                        </span>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="input block w-full rounded-full py-[0.375rem]"
                          placeholder="Enter Your Message"
                          rows={1}
                          name="message"
                        />
                      </label>
                    </div>
                    <div>
                      <Button
                        isLoading={isLoading}
                        disabled={isLoading}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        <span>Submit</span>
                        <Send />
                      </Button>
                    </div>
                  </form>
                </div>
                <div className="hidden shrink-0 self-stretch md:block md:w-60 xl:w-80">
                  <img
                    className="size-full object-cover object-center"
                    src="/images/home/consultation-schedule-form.png"
                    alt="consultation-schedule-form-side-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationScheduleSection;
