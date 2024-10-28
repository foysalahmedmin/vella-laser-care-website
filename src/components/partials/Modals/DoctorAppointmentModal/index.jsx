import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { errorMessage } from "@/helpers/error.js";
import { fetchMe } from "@/network/user/userApis.js";
import {
  AddAppointment,
  fetchDoctorSlots,
  fetchFilteredDoctors,
} from "@/pages/(common)/HomePage/homeApis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Calendar, Send } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateBDPhoneNumber, validateEmail } from "@/lib/validation.js";

const DoctorAppointmentModal = ({
  isOpen,
  lang,
  setIsOpen,
  size = "lg",
  doc,
  department,
}) => {
  const { role, isAuthenticated } = useUser();
  const [name, setName] = useState("");
  const [appointment_type, setAppointmentType] = useState("online");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const { data: me, refetch } = useQuery({
    queryKey: ["me", isAuthenticated],
    queryFn: async () => {
      const data = await fetchMe();
      setName(data?.name);
      setEmail(data?.email);
      setPhone(data?.phone);
      return data;
    },
  });
  const { data: doctors } = useQuery({
    queryKey: ["filtered_doctors", department],
    queryFn: () => fetchFilteredDoctors(department),
    enabled: !!department,
  });
  const { data: slots } = useQuery({
    queryKey: ["filtered_slots", doc],
    queryFn: () =>
      fetchDoctorSlots(
        doc,
        moment(new Date(date)).format("dddd")?.toLocaleLowerCase(),
      ),
    enabled: !!date && !!doc,
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AddAppointment,
    onSuccess: async () => {
      await refetch();
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !name ||
        !appointment_type ||
        !department ||
        !email ||
        !phone ||
        !date ||
        !slot
      ) {
        return toast.error("Please fill all fields");
      }
      if (!validateBDPhoneNumber(phone)) {
        return toast.error("Please enter valid phone number");
      }
      if (!validateEmail(email)) {
        return toast.error("Please enter valid email");
      }
      const status = await mutateAsync({
        ...(role === "customer" && { customer: me?._id }),
        ...(role === "parlor" && { parlor: me?._id }),
        name,
        appointment_type,
        department,
        doctor: doc,
        email,
        phone,
        date,
        slot,
        message,
      });
      if (appointment_type === "online") {
        setName("");
        setAppointmentType("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        setIsOpen(false);
        window.location.replace(status);
      } else {
        setName("");
        setAppointmentType("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        setIsOpen(false);
        toast.success(status?.message);
      }
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalBackdrop />
        <ModalContent className="rounded-2xl" size={size}>
          <div className="relative px-8 py-8 md:px-16 md:py-12 lg:px-24 lg:py-16">
            <ModalCloseTrigger className="absolute right-4 top-4 rounded-full border-current text-xs text-accent md:right-4 md:top-4" />
            <div className="space-y-6">
              <div className="rounded-xl bg-primary/5 px-4 py-2 text-center">
                <h1 className="text-title/85">Appoint A Doctor</h1>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-center">
                      <span className="mb-3 block font-medium text-title/85">
                        Appointment type
                      </span>
                      <div className="flex items-center justify-center gap-4">
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            disabled={role === "parlor"}
                            value="online"
                            checked={appointment_type === "online"}
                            onChange={(e) => setAppointmentType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            Online
                          </span>
                        </label>
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            disabled={role === "parlor"}
                            value="offline"
                            checked={appointment_type === "offline"}
                            onChange={(e) => setAppointmentType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            Chamber Visit
                          </span>
                        </label>
                      </div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        {lang === "en" ? "Name" : "নাম"}
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={
                          lang === "en" ? "Enter Your Name" : "আপনার নাম লিখুন"
                        }
                        name="name"
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Doctor
                      </span>
                      <div className="input block w-full rounded-full">
                        <select
                          className="h-full w-full border-none outline-none"
                          name="doctor"
                          value={doc}
                          disabled={true}
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctors?.map((doctor) => (
                            <option key={doctor._id} value={doctor._id}>
                              {doctor?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
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
                      <span className="mb-2 inline-block font-medium text-title/85">
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
                      <span className="mb-2 inline-block font-medium text-title/85">
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
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Slot
                      </span>
                      <div className="input block w-full rounded-full">
                        <select
                          className="h-full w-full border-none outline-none"
                          name="slot"
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
                    <label className="lg:col-span-2">
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Message
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input block w-full rounded-3xl py-[0.375rem]"
                        placeholder="Enter Your Message"
                        rows={1}
                        name="message"
                      />
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      isLoading={isPending}
                      disabled={isPending}
                      onClick={handleSubmit}
                      type="submit"
                    >
                      <span>Submit</span>
                      <Send />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoctorAppointmentModal;
