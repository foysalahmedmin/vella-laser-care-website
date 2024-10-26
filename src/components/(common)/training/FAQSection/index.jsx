import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle>FAQ</Subtitle>
          <Title>What you need to know about your course</Title>
        </SectionTitle>
        <div className="mx-auto max-w-2xl space-y-2">
          <Accordion isOpen={true}>
            <AccordionTrigger className="text-title/85">
              <h5 className="text-title/85">
                Do I have to immediately pay the course price in full?
              </h5>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                You can if you want, however, if you’d prefer to spread the
                payments we can easily set-up an interest free payment plan for
                you, which you can pay off fortnightly or monthly instead. But
                seriously, if money worries are holding you back from joining
                any of our courses, talk to our team and we’ll be happy to see
                if we can find a solution for you.
              </p>
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger className="text-title/85">
              <h5 className="text-title/85">When can I access my course?</h5>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                You can if you want, however, if you’d prefer to spread the
                payments we can easily set-up an interest free payment plan for
                you, which you can pay off fortnightly or monthly instead. But
                seriously, if money worries are holding you back from joining
                any of our courses, talk to our team and we’ll be happy to see
                if we can find a solution for you.
              </p>
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger className="text-title/85">
              <h5 className="text-title/85">
                Are there any prerequisites for this course?
              </h5>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                You can if you want, however, if you’d prefer to spread the
                payments we can easily set-up an interest free payment plan for
                you, which you can pay off fortnightly or monthly instead. But
                seriously, if money worries are holding you back from joining
                any of our courses, talk to our team and we’ll be happy to see
                if we can find a solution for you.
              </p>
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger className="text-title/85">
              <h5 className="text-title/85">
                How long does an eyelash course take?
              </h5>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                You can if you want, however, if you’d prefer to spread the
                payments we can easily set-up an interest free payment plan for
                you, which you can pay off fortnightly or monthly instead. But
                seriously, if money worries are holding you back from joining
                any of our courses, talk to our team and we’ll be happy to see
                if we can find a solution for you.
              </p>
            </AccordionContent>
          </Accordion>
        </div>
        <div className="text-center">
          <h3>Still have questions?</h3>
          <p>
            Contact us for more <br /> information.
          </p>
          <Link to="/contact">
            <Button asChild={true}>
              <span>Contact Us</span> <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
