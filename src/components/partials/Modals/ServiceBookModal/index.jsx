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
  AddServiceBooking,
  fetchFilteredSlots,
} from "@/pages/(common)/ServiceDetailsPage/serviceApis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Calendar, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const ServiceBookModal = ({
  isOpen,
  lang,
  setIsOpen,
  size = "lg",
  service,
  s_type,
}) => {
  const { isAuthenticated } = useUser();
  const [service_type, setServiceType] = useState(s_type || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const { data: me } = useQuery({
    queryKey: ["me", isAuthenticated],
    queryFn: async () => {
      const data = await fetchMe();
      setName(data?.name);
      setEmail(data?.email);
      setPhone(data?.phone);
      return data;
    },
  });
  const { data: slots } = useQuery({
    queryKey: ["filtered_slots"],
    queryFn: () => fetchFilteredSlots(),
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: AddServiceBooking,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !name ||
        !email ||
        !phone ||
        !date ||
        !slot ||
        !service ||
        !service_type ||
        !payment_method
      ) {
        return toast.error("Please fill all fields");
      }
      const status = await mutateAsync({
        customer: isAuthenticated ? me?._id : "",
        name,
        service,
        service_type,
        email,
        phone,
        date,
        slot,
        message,
        payment_method,
      });
      if (payment_method === "online") {
        setServiceType("");
        setName("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        setPaymentMethod("");
        window.location.replace(status);
        setIsOpen(false);
      } else {
        toast.success(status?.message);
        setServiceType("");
        setName("");
        setEmail("");
        setPhone("");
        setDate(new Date());
        setSlot("");
        setMessage("");
        setPaymentMethod("");
        setIsOpen(false);
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
          <div className="relative px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16">
            <ModalCloseTrigger className="absolute right-4 top-4 rounded-full border-current text-xs text-accent md:right-4 md:top-4" />
            <div className="space-y-6">
              <div className="rounded-xl bg-primary/5 px-4 py-2 text-center">
                <h1 className="text-title/85">Book A Service</h1>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-center">
                      <span className="mb-3 block font-medium text-title/85">
                        Service type
                      </span>
                      <div className="flex items-center justify-center gap-4">
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            value="service"
                            checked={service_type === "service"}
                            onChange={(e) => setServiceType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            Service
                          </span>
                        </label>
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            value="consultant"
                            checked={service_type === "consultant"}
                            onChange={(e) => setServiceType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            Consultant
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
                        Mode
                      </span>
                      <div className="input block w-full rounded-full">
                        <select
                          className="h-full w-full border-none outline-none"
                          name="mode"
                          value={payment_method}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          required
                        >
                          <option value="">Select Mode</option>
                          <option value="online">Online</option>
                          <option value="cash">Chamber Visit</option>
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

export default ServiceBookModal;
