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
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { addNewFeedback } from "@/network/feedback/feedbackApis.js";
import { toast } from "react-toastify";
import { SetResetFeedback } from "@/redux/slices/feedbackSlice.js";
import { errorMessage } from "@/helpers/error.js";

const ServiceReviewModal = ({ isOpen, lang, setIsOpen, size = "lg", type }) => {
  const dispatch = useDispatch();
  const { doctor_id, service_id } = useSelector((state) => state.feedback);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: addNewFeedback,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!message) return toast.error("Please fill all fields");
      const status = await mutateAsync({
        doctor: type === "doctor" ? doctor_id : "",
        service: type === "service" ? service_id : "",
        message,
        rating,
        feedback_type: type === "doctor" ? "doctor" : "service",
      });
      dispatch(SetResetFeedback());
      setMessage("");
      setRating(0);
      setIsOpen(false);
      toast.success(status?.message);
      setIsOpen(false);
    } catch (e) {
      toast.error(errorMessage(e));
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
                <h1 className="text-title/85">
                  {type === "doctor" ? "Rate your doctor" : "Rate our service"}
                </h1>
              </div>
              <div>
                <form className="space-y-6">
                  <div className="text-center">
                    <span className="mb-2 inline-block font-medium text-title/85">
                      How was overall experience with{" "}
                      {type === "doctor" ? "doctor" : "service"}?
                    </span>
                    <div>
                      <StarRating
                        className="text-3xl"
                        clickable={true}
                        rating={rating}
                        setRating={setRating}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="mb-2 block text-center font-medium text-title/85">
                      Any additional feedback?
                    </span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input block h-auto w-full rounded-3xl py-[0.375rem]"
                      placeholder="Enter Your Feedback"
                      rows={5}
                      name="feedback"
                    />
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

export default ServiceReviewModal;
