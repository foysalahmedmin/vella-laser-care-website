import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { Send } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/partials/Cards/ProductCard/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchOrderProducts } from "@/pages/(user)/UserDashboard/dashboardApis.js";
import {
  SetFeedbackProducts,
  SetResetFeedback,
} from "@/redux/slices/feedbackSlice.js";
import { addNewFeedback } from "@/network/feedback/feedbackApis.js";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";

const ProductFeedback = ({ isOpen, lang, setIsOpen, size = "lg" }) => {
  const dispatch = useDispatch();
  const { products, order_id } = useSelector((state) => state.feedback);
  const [message, setMessage] = useState("");
  const { _ } = useQuery({
    queryKey: ["order_products", order_id],
    queryFn: async () => {
      const data = await fetchOrderProducts(order_id);
      dispatch(SetFeedbackProducts(data?.products));
      return data;
    },
    enabled: !!order_id,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: addNewFeedback,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!message || !products) return toast.error("Please fill all fields");
      const status = await mutateAsync({
        products: products?.map((x) => {
          return {
            product: x._id,
            feedback: message,
            rating: x?.rating || 0,
            message: message,
          };
        }),
        feedback_type: "product",
      });
      dispatch(SetResetFeedback());
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
                <h1 className="text-title/85">Product Feedback</h1>
              </div>
              <div>
                <form className="space-y-6">
                  {products?.map((item, index) => (
                    <div
                      className="py-6 first:pt-0 last:border-0 last:pb-0"
                      key={index}
                    >
                      <ProductCard
                        item={item}
                        index={index}
                        variant="feedback"
                      />
                    </div>
                  ))}
                  <div>
                    <span className="mb-2 block text-center font-medium text-title/85">
                      Write your feedback
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

export default ProductFeedback;
