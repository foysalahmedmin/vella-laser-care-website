import { notifications } from "@/assets/data/notifications";
import { Button } from "@/components/ui/Button";
import NotificationItem from "./NotificationItem";

const NotificationsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-6 rounded-2xl px-8 py-16 shadow-custom-1 md:space-y-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between gap-4">
            <Button
              className="primary border-primary uppercase leading-none text-primary hover:bg-primary/5"
              size="sm"
              variant="outline"
            >
              mark as read
            </Button>
            <div>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  className="primary checkbox rounded-full text-lg"
                  type="checkbox"
                  name="select-all"
                />
                <span className="font-medium leading-none text-title/85">
                  Select All
                </span>
              </label>
            </div>
          </div>
          <div className="space-y-4">
            {notifications?.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
