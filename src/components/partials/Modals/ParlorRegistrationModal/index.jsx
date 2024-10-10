import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { Send } from "lucide-react";
import { useState } from "react";

const ParlorRegistrationModal = ({ isOpen, lang, setIsOpen, size = "lg" }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [tradeLicense, setTradeLicense] = useState("");
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
                <h1 className="text-title/85">Register as Parlor</h1>
              </div>
              <div>
                <form className="space-y-6">
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
                        Address
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        City
                      </span>
                      <div className="input block w-full rounded-full">
                        <select
                          className="h-full w-full border-none outline-none"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        >
                          <option value="">Select City</option>
                          <option value="dhaka">Dhaka</option>
                        </select>
                      </div>
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Postal Code
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        name="postal-code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                      />
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
                    <label className="lg:col-span-2">
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Trade License
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        placeholder="Enter Your Trade License"
                        value={tradeLicense}
                        onChange={(e) => setTradeLicense(e.target.value)}
                        name="trade-license"
                        required
                      />
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
                        rows={3}
                        name="message"
                      />
                    </label>
                  </div>
                  <div className="text-center">
                    <Button type="submit">
                      <span>Request to register</span>
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

export default ParlorRegistrationModal;
