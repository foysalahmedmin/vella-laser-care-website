import { PayCard } from "@/assets/svg/icons/PayCard";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const BalanceSection = () => {
  return (
    <section className="mb-16 pt-16 md:pt-24">
      <div className="container">
        <div className="space-y-6 rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="shrink-0">
                <PayCard className="text-4xl text-dark" />
              </div>
              <div>
                <span>Withdrawn to date:</span>
                <br />
                <strong className="text-lg">25000BDT</strong>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-primary">
              <span>Since Joining</span>
              <ChevronDown className="size-4" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-muted/50 p-8 md:p-10">
              <div className="space-y-6">
                <h4 className="leading-none">Available balance</h4>
                <strong className="block text-3xl leading-none">3000BDT</strong>
                <Button className="text-sm uppercase">withdraw balance</Button>
              </div>
            </div>
            <div className="rounded-xl bg-muted/50 p-8 md:p-10">
              <div className="space-y-6">
                <h4 className="leading-none">Future Balance</h4>
                <strong className="block text-3xl leading-none">3000BDT</strong>
                <span className="inline-block font-medium">
                  6 Active orders
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-muted/50 p-8 md:p-10">
              <div className="space-y-6">
                <h4 className="leading-none">Commission</h4>
                <strong className="block text-3xl leading-none">3000BDT</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceSection;
