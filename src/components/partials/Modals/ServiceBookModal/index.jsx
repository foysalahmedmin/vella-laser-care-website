import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { Calendar, Clock, Send } from "lucide-react";
import { useState } from "react";

const ServiceBookModal = ({ isOpen, lang, setIsOpen, size = "lg" }) => {
  const [appointment_type, setAppointmentType] = useState("in_parlor");
  const [name, setName] = useState("");
  const [brunch, setBrunch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
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
                        Appointment type
                      </span>
                      <div className="flex items-center justify-center gap-4">
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            value="in_parlor"
                            checked={appointment_type === "in_parlor"}
                            onChange={(e) => setAppointmentType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            In Parlor
                          </span>
                        </label>
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="radio text-lg"
                            type="radio"
                            name="appointment-type"
                            value="at_house"
                            checked={appointment_type === "at_house"}
                            onChange={(e) => setAppointmentType(e.target.value)}
                          />
                          <span className="inline-block font-medium text-title/85">
                            At House
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
                        Brunch
                      </span>
                      <div className="input block w-full rounded-full">
                        <select
                          className="h-full w-full border-none outline-none"
                          name="brunch"
                          value={brunch}
                          onChange={(e) => setBrunch(e.target.value)}
                          required
                        >
                          <option value="">Select Brunch</option>
                          <option value="dhaka">Dhaka</option>
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
                        Time
                      </span>
                      <div className="input w-full flex-1 rounded-full">
                        <Clock
                          className="cursor-pointer"
                          onClick={(e) => {
                            const dateInput = e.target?.nextElementSibling;
                            if (dateInput && dateInput.type === "date") {
                              dateInput.showPicker();
                            }
                          }}
                        />
                        <input
                          type="time"
                          className="icon-none h-8 w-full border-none outline-none"
                          name="time"
                          onChange={(e) => setTime(e.target.value)}
                          required
                        />
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
                    <Button type="submit">
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
