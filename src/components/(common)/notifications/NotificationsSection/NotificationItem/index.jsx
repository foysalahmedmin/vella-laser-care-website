import { StatusAtLastMileHub } from "@/assets/svg/icons/Notifications";
import moment from "moment";

const NotificationItem = ({ item }) => {
  const { message, createdAt } = item;
  return (
    <label className="group flex cursor-pointer gap-4 rounded-md border p-4 hover:bg-primary/5 has-[input:checked]:bg-primary/10">
      <div className="flex-1">
        <div className="flex items-start gap-4">
          <div className="size-12 shrink-0 rounded-full bg-primary/25 p-1 text-primary">
            <div className="grid size-full place-items-center rounded-full border-4 border-primary/25">
              <StatusAtLastMileHub />
            </div>
          </div>
          <div>
            <p className="text-title/85 group-hover:text-primary group-has-[input:checked]:font-medium group-has-[input:checked]:text-primary">
              {message}
            </p>
            <p className="text-muted-foreground">
              <span>
                {moment(new Date(createdAt)).format("MMMM D, YYYY, h:mm A")}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="shrink-0">
        {/*<input*/}
        {/*  type="checkbox"*/}
        {/*  className="primary checkbox rounded-full text-lg"*/}
        {/*/>*/}
      </div>
    </label>
  );
};

export default NotificationItem;
