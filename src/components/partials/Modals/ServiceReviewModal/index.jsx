import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { StarRating } from "@/components/ui/StarRating";
import { Send } from "lucide-react";
import { useState } from "react";

const ServiceReviewModal = ({ isOpen, lang, setIsOpen, size = "lg" }) => {
  const [experienceRating, setExperienceRating] = useState(0);
  const [responseTimeRating, setResponseTimeRating] = useState(0);
  const [informativeLevelRating, setInformativeLevelRating] = useState(0);
  const [softwareRating, setSoftwareRating] = useState(0);
  const [feedback, setFeedback] = useState();
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
                  <div className="text-center">
                    <span className="mb-2 inline-block font-medium text-title/85">
                      How was experience with councilor?
                    </span>
                    <div>
                      <StarRating
                        className="text-3xl"
                        clickable={true}
                        rating={experienceRating}
                        setRating={setExperienceRating}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="mb-2 inline-block font-medium text-title/85">
                      How fast the counsellor responded?
                    </span>
                    <div>
                      <StarRating
                        className="text-3xl"
                        clickable={true}
                        rating={responseTimeRating}
                        setRating={setResponseTimeRating}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="mb-2 inline-block font-medium text-title/85">
                      How informative they were?
                    </span>
                    <div>
                      <StarRating
                        className="text-3xl"
                        clickable={true}
                        rating={informativeLevelRating}
                        setRating={setInformativeLevelRating}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="mb-2 inline-block font-medium text-title/85">
                      How easy it was to use the software and their
                      overall experience?
                    </span>
                    <div>
                      <StarRating
                        className="text-3xl"
                        clickable={true}
                        rating={softwareRating}
                        setRating={setSoftwareRating}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="mb-2 block text-center font-medium text-title/85">
                      Any additional feedback?
                    </span>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="input block h-auto w-full rounded-3xl py-[0.375rem]"
                      placeholder="Enter Your Feedback"
                      rows={5}
                      name="feedback"
                    />
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

export default ServiceReviewModal;
