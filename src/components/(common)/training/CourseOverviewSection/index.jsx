import { Access } from "@/assets/svg/icons/course-overview/Access";
import { CustomKit } from "@/assets/svg/icons/course-overview/CustomKit";
import { Duration } from "@/assets/svg/icons/course-overview/Duration";
import { Language } from "@/assets/svg/icons/course-overview/Duration copy";
import { Method } from "@/assets/svg/icons/course-overview/Method";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const CourseOverviewSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Title>Course overview</Title>
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-12 md:gap-12 xl:gap-16">
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <ul className="space-y-4">
              <li className="flex w-full items-center gap-4 rounded-md bg-primary/15 px-4 py-2 text-primary">
                <div className="shrink-0">
                  <Method className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 font-light">
                  <span className="leading-none">Method</span>
                  <span className="leading-none">100% online</span>
                </div>
              </li>
              <li className="flex w-full items-center gap-4 rounded-md bg-primary/15 px-4 py-2 text-primary">
                <div className="shrink-0">
                  <Duration className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 font-light">
                  <span className="leading-none">Duration</span>
                  <span className="leading-none">10 weeks</span>
                </div>
              </li>
              <li className="flex w-full items-center gap-4 rounded-md bg-primary/15 px-4 py-2 text-primary">
                <div className="shrink-0">
                  <CustomKit className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 font-light">
                  <span className="leading-none">Custom kit</span>
                  <span className="leading-none">Included</span>
                </div>
              </li>
              <li className="flex w-full items-center gap-4 rounded-md bg-primary/15 px-4 py-2 text-primary">
                <div className="shrink-0">
                  <Access className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 font-light">
                  <span className="leading-none">Access</span>
                  <span className="leading-none">12 months</span>
                </div>
              </li>
              <li className="flex w-full items-center gap-4 rounded-md bg-primary/15 px-4 py-2 text-primary">
                <div className="shrink-0">
                  <Language className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 font-light">
                  <span className="leading-none">Language</span>
                  <span className="leading-none">English</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-7 xl:col-span-8">
            <div className="space-y-4">
              <h3>Why study Eyelash Extensions?</h3>
              <p>
                Learn the secret to luscious lashes with our Certificate in
                Eyelash Extensions. Tailored for aspiring lash artists, beauty
                professionals, or beginners eager to refine their skills, this
                100% online, self-paced course offers a 12-month completion
                window and access to expert tutors six days a week. Upon
                completion, you’ll receive a Certificate of Attainment as
                confirmation of your lash artistry.
                <br /> <br />
                This course covers the theory and practical skills you need to
                master classic and volume eyelash extensions. Plus, you’ll learn
                the intricacies of flawless lash application, from selecting the
                right lashes to determining the best ultra-fast drying glue
                techniques. You’ll also receive a custom beauty kit that
                includes practice essentials such as a mannequin head, practice
                strip lashes, ultra-fast drying glue, glue remover, and more,
                ensuring you have everything you need to perfect your craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
