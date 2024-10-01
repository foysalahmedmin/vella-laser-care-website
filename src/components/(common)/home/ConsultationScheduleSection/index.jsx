import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { Calendar, Clock, Send } from "lucide-react";

const ConsultationScheduleSection = () => {
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
              <Title>Schedule a Consultation</Title>
              <Description>
                We're thrilled you're interested in joining our campaign! Please
                fill out <br /> the form below to get started.
              </Description>
            </SectionTitle>
            <div className="overflow-hidden rounded-xl bg-card shadow-custom-1">
              <div className="flex">
                <div className="flex-1 self-stretch p-10">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Name
                        </span>
                        <input
                          type="text"
                          className="input block w-full rounded-full"
                          placeholder="Enter Your Name"
                          name="name"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Appointment type
                        </span>
                        <div className="flex items-center gap-4 py-2">
                          <label className="inline-flex cursor-pointer items-center gap-2">
                            <input
                              className="radio text-lg"
                              type="radio"
                              name="appointment-type"
                              value="online"
                              defaultChecked
                            />
                            <span className="inline-block font-semibold text-title">
                              Online
                            </span>
                          </label>
                          <label className="inline-flex cursor-pointer items-center gap-2">
                            <input
                              className="radio text-lg"
                              type="radio"
                              name="appointment-type"
                              value="offline"
                            />
                            <span className="inline-block font-semibold text-title">
                              Offline
                            </span>
                          </label>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Department
                        </span>
                        <div className="input block w-full rounded-full">
                          <select
                            className="h-8 w-full border-none outline-none"
                            name="department"
                            required
                          >
                            <option disabled>Select Department</option>
                            <option value="dermatology">Dermatology</option>
                          </select>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Location
                        </span>
                        <div className="input block w-full rounded-full">
                          <select
                            className="h-8 w-full border-none outline-none"
                            name="location"
                            required
                          >
                            <option disabled>Select Location</option>
                            <option value="dhaka">Dhaka</option>
                          </select>
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Email
                        </span>
                        <input
                          type="email"
                          className="input block w-full rounded-full"
                          placeholder="Enter Your Email"
                          name="email"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Phone
                        </span>
                        <input
                          type="tel"
                          className="input block w-full rounded-full"
                          placeholder="Enter Your Phone"
                          name="phone"
                          required
                        />
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
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
                            required
                          />
                        </div>
                      </label>
                      <label>
                        <span className="mb-2 inline-block font-semibold text-title">
                          Time
                        </span>
                        <div className="input w-full flex-1 rounded-full">
                          <Clock
                            className="cursor-pointer"
                            onClick={(e) => {
                              const dateInput = e.target?.nextElementSibling;
                              if (dateInput && dateInput.type === "time") {
                                dateInput.showPicker();
                              }
                            }}
                          />
                          <input
                            type="time"
                            className="icon-none h-8 w-full border-none outline-none"
                            name="time"
                            required
                          />
                        </div>
                      </label>
                      <label className="col-span-2">
                        <span className="mb-2 inline-block font-semibold text-title">
                          Message
                        </span>
                        <textarea
                          type="text"
                          className="input block w-full rounded-full py-[0.375rem]"
                          placeholder="Enter Your Message"
                          rows={1}
                          name="message"
                        />
                      </label>
                    </div>
                    <div>
                      <Button type="submit">
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
