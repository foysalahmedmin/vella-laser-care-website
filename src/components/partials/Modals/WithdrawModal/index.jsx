import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
} from "@/components/ui/Modal";
import { fetchMe } from "@/network/user/userApis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Send } from "lucide-react";
import { useState } from "react";
import { fetchParlorCounts } from "@/pages/(parlor)/apis.js";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";
import { AddWithdrawRequest } from "@/pages/(parlor)/EarningsPage/api.js";

const WithdrawModal = ({ isOpen, lang, setIsOpen, size = "lg" }) => {
  const { role, isAuthenticated } = useUser();
  const [amount, setAmount] = useState(0);
  const [account_name, setAccountName] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [bank_name, setBankName] = useState("");
  const [routing_number, setRoutingNumber] = useState("");
  const [message, setMessage] = useState("");
  const { data } = useQuery({
    queryKey: ["dashboard_count", role],
    queryFn: () => fetchParlorCounts(),
  });
  const { data: me } = useQuery({
    queryKey: ["me", isAuthenticated],
    queryFn: async () => fetchMe(),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: AddWithdrawRequest,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data?.balance < 1) return toast.warn("Insufficient Balance");
      if (
        amount === 0 ||
        !account_name ||
        !account_number ||
        !bank_name ||
        !branch
      )
        return toast.warn("Please fill all fields");
      const status = await mutateAsync({
        amount,
        account_name,
        account_number,
        bank_name,
        branch,
        routing_number,
        message,
      });
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
                <h1 className="text-title/85">Withdraw Request</h1>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-center">
                      <span className="mb-3 block font-medium text-title/85">
                        Balance: {data?.balance}BDT
                      </span>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        {lang === "en" ? "Amount" : "Amount"}
                      </span>
                      <input
                        type="number"
                        className="input block w-full rounded-full"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder={
                          lang === "en" ? "Enter Amount" : "Enter Amount"
                        }
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        {lang === "en" ? "Account Name" : "Account Name"}
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        value={account_name}
                        onChange={(e) => setAccountName(e.target.value)}
                        placeholder={
                          lang === "en"
                            ? "Enter Account Name"
                            : "Enter Account Name"
                        }
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        {lang === "en" ? "Account Number" : "Account Number"}
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        value={account_number}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        placeholder={
                          lang === "en"
                            ? "Enter Account Number"
                            : "Enter Account Number"
                        }
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Bank Name
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        placeholder="Enter Bank Name"
                        value={bank_name}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Branch
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        placeholder="Enter Branch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <span className="mb-2 inline-block font-medium text-title/85">
                        Routing Number
                      </span>
                      <input
                        type="text"
                        className="input block w-full rounded-full"
                        placeholder="Enter Routing Number"
                        value={routing_number}
                        onChange={(e) => setRoutingNumber(e.target.value)}
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
                        rows={1}
                        name="message"
                      />
                    </label>
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

export default WithdrawModal;
