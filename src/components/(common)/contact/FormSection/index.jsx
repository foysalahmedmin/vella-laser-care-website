import { Button } from "@/components/ui/Button";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { Send } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AddContact } from "@/pages/(common)/ContactPage/contactApis.js";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";
import { validateBDPhoneNumber, validateEmail } from "@/lib/validation.js";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: AddContact,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !phone || !message) {
        return toast.error("All fields are required!");
      }
      if (!validateEmail(email)) {
        return toast.error("Please enter a valid email address!");
      }
      if (!validateBDPhoneNumber(phone)) {
        return toast.error("Please enter a valid phone number!");
      }
      const status = await mutateAsync({
        name,
        email,
        phone,
        message,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success(status?.message);
    } catch (e) {
      toast.error(errorMessage(e));
    }
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Title>Get in Touch With Us</Title>
        </SectionTitle>
        <div className="mx-auto max-w-3xl">
          <form>
            <div className="grid grid-cols-2 gap-6">
              <label className="col-span-2 block">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Name"
                />
              </label>
              <label className="block">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Email"
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Your Phone"
                />
              </label>
              <label className="col-span-2 block">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input h-auto rounded-none border-x-0 border-b border-t-0 px-0 py-2"
                  placeholder="Message"
                  rows={5}
                />
              </label>
            </div>
            <div className="mt-10 text-center">
              <Button
                isLoading={isPending}
                disabled={isPending}
                onClick={handleSubmit}
                type="submit"
              >
                <span>SUBMIT</span> <Send className="size-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
