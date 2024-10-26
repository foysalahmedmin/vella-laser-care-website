import { Button } from "@/components/ui/Button";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { Send } from "lucide-react";

const FormSection = () => {
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
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Name"
                />
              </label>
              <label className="block">
                <input
                  type="email"
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Email"
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  className="input rounded-none border-x-0 border-b border-t-0 px-0"
                  placeholder="Your Subject"
                />
              </label>
              <label className="col-span-2 block">
                <textarea
                  type="text"
                  className="input h-auto rounded-none border-x-0 border-b border-t-0 px-0 py-2"
                  placeholder="Message"
                  rows={5}
                />
              </label>
            </div>
            <div className="mt-10 text-center">
              <Button type="submit">
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
