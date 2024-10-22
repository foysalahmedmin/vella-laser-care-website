import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SetCartPaymentMethod,
  SetResetCart,
} from "@/redux/slices/cartSlice.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AddCustomerOrder,
  AddGuestOrder,
  fetchFilteredShipping,
} from "@/pages/(common)/ShopPage/shopApis.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { errorMessage } from "@/helpers/error.js";
import useUser from "@/redux/slices/user-slice/useUser.js";

const PaymentSection = ({ className }) => {
  const navigate = useNavigate();
  const { role, isAuthenticated } = useUser();
  const [isAgree, setIsAgree] = useState(false);
  const dispatch = useDispatch();
  const {
    email,
    name,
    address,
    postal,
    phone,
    payment_method,
    products,
    city,
  } = useSelector((state) => state.cart);
  const { data: shipping } = useQuery({
    queryKey: ["filtered_shipping", city],
    queryFn: () => fetchFilteredShipping(city),
    enabled: !!city,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: AddGuestOrder,
  });
  const { isPending: isPending2, mutateAsync: mutateAsync2 } = useMutation({
    mutationFn: AddCustomerOrder,
  });
  const handleGuestOrder = async () => {
    try {
      if (!isAgree) {
        toast.error("Please agree with our terms and conditions");
        return;
      }
      if (
        !name ||
        !email ||
        !address ||
        !postal ||
        !phone ||
        !payment_method ||
        products?.length === 0
      )
        return toast.warn("Please fill/select all required fields!");
      const response = await mutateAsync({
        name,
        city,
        postal,
        phone,
        address,
        email,
        sub_total: products
          ?.map((x) => x?.price * x?.quantity)
          ?.reduce((partialSum, a) => partialSum + a, 0),
        total:
          products
            ?.map((x) => x?.price * x?.quantity)
            ?.reduce((partialSum, a) => partialSum + a, 0) +
          (shipping?.charge || 0),
        shipping: shipping?.charge,
        sold_from: "customer",
        payment_method,
        items: products?.map((x) => {
          return {
            product: x?._id,
            quantity: x?.quantity,
            selling_price: x?.price,
            discount_amount: x?.discount_amount,
            type: "product",
          };
        }),
      });
      if (payment_method === "cash") {
        toast.success(response?.message);
        dispatch(SetResetCart());
        navigate("/shop");
      } else {
        dispatch(SetResetCart());
        window.location.replace(response);
      }
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  const handleCustomerOrder = async () => {
    try {
      if (!isAgree) {
        toast.error("Please agree with our terms and conditions");
        return;
      }
      if (
        !name ||
        !email ||
        !address ||
        !postal ||
        !phone ||
        !payment_method ||
        products?.length === 0
      )
        return toast.warn("Please fill/select all required fields!");
      const response = await mutateAsync2({
        name,
        city,
        postal,
        phone,
        address,
        email,
        sub_total: products
          ?.map((x) => x?.price * x?.quantity)
          ?.reduce((partialSum, a) => partialSum + a, 0),
        total:
          products
            ?.map((x) => x?.price * x?.quantity)
            ?.reduce((partialSum, a) => partialSum + a, 0) +
          (shipping?.charge || 0),
        shipping: shipping?.charge,
        sold_from: "customer",
        payment_method,
        items: products?.map((x) => {
          return {
            product: x?._id,
            quantity: x?.quantity,
            selling_price: x?.price,
            discount_amount: x?.discount_amount,
            type: "product",
          };
        }),
      });
      if (payment_method === "cash") {
        toast.success(response?.message);
        dispatch(SetResetCart());
        navigate("/shop");
      } else {
        dispatch(SetResetCart());
        window.location.replace(response);
      }
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  return (
    <section className={cn("space-y-8", className)}>
      <div className="rounded-md bg-card p-4">
        <div className="space-y-6">
          <strong className="block font-medium uppercase">
            3. SELECT PAYMENT METHOD
          </strong>
          <form className="space-y-4">
            <label className="group relative flex cursor-pointer items-center justify-between rounded-md border px-4 py-4 has-[:checked]:border-current">
              <div className="inline-flex items-center gap-2">
                <input
                  className="radio shrink-0 text-xl leading-none"
                  type="radio"
                  value="offline"
                  disabled={role === "parlor"}
                  checked={payment_method === "offline"}
                  onChange={() => dispatch(SetCartPaymentMethod("offline"))}
                  name="payment-method"
                />
                <span className="font-medium leading-none group-has-[:checked]:text-title">
                  Cash on delivery
                </span>
              </div>
              <img
                className="h-8 object-contain object-right"
                src="/images/payment-methods/bkash.png"
                alt="bkash-logo"
              />
              <span className="absolute left-4 top-0 inline-block -translate-y-1/2 bg-card px-2 font-medium">
                Express checkout
              </span>
            </label>
            <label className="group relative flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 has-[:checked]:border-current">
              <div className="inline-flex items-center gap-2">
                <input
                  className="radio shrink-0 text-xl leading-none"
                  type="radio"
                  value="online"
                  name="payment-method"
                  disabled={role === "parlor"}
                  checked={payment_method === "online"}
                  onChange={() => dispatch(SetCartPaymentMethod("online"))}
                />
                <span className="font-medium leading-none group-has-[:checked]:text-title">
                  Credit/Debit Cards
                </span>
              </div>
              <img
                className="h-6 object-contain object-right"
                src="/images/payment-methods/ssl.png"
                alt="ssl-commerce-logo"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="rounded-md bg-card pt-4">
        <div className="space-y-6">
          <strong className="block px-4 font-medium uppercase">
            ORDER SUMMARY
          </strong>
          <div className="space-y-4 px-4">
            {products?.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-1">
                  <span className="block text-title/85">
                    {item?.quantity} × {item?.name}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <span className="text-sm">{item?.short_description}</span>
                    </div>
                  </div>
                </div>
                <div className="min-w-20 text-right">
                  <span className="inline-block font-medium uppercase text-title">
                    {item?.price}BDT
                  </span>
                </div>
              </div>
            ))}
            <hr />
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block font-semibold uppercase text-title/85">
                  SUBTOTAL
                </span>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block font-medium uppercase text-title">
                  {products
                    ?.map((x) => x?.price * x?.quantity)
                    ?.reduce((partialSum, a) => partialSum + a, 0)}
                  BDT
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block text-title/85">Shipping</span>
                <div className="flex items-center gap-2 text-sm">
                  <span>Regular ({shipping?.days || 0} days delivery)</span>
                </div>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block font-medium uppercase text-title">
                  {shipping?.charge || 0}BDT
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-b-md bg-muted-foreground/35 px-4 py-4">
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block font-semibold uppercase text-title/85">
                  ORDER TOTAL
                </span>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block text-lg font-semibold uppercase text-title">
                  {products
                    ?.map((x) => x?.price * x?.quantity)
                    ?.reduce((partialSum, a) => partialSum + a, 0) +
                    (shipping?.charge || 0)}
                  BDT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            className="checkbox primary border border-current text-xl"
            type="checkbox"
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
          />
          <span className="inline-block text-xs font-medium capitalize leading-none">
            I have read and agree to the website{" "}
            <Link
              to="terms-conditions"
              className="font-medium text-title/85 underline"
            >
              terms and conditions *
            </Link>
          </span>
        </label>
      </div>
      <div>
        <Button
          isLoading={isPending || isPending2}
          disabled={isPending || isPending2}
          onClick={isAuthenticated ? handleCustomerOrder : handleGuestOrder}
          className="w-full text-sm uppercase"
        >
          <span>COMPLETE ORDER</span>
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default PaymentSection;
