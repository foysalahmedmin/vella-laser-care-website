import { Button } from "@/components/ui/Button";
import { LucideBell } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotificationsCount } from "@/pages/(common)/NotificationsPage/apis.js";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["notifications_count"],
    queryFn: () => fetchNotificationsCount(),
  });
  return (
    <div className="relative inline-flex items-center">
      <Button
        onClick={() => navigate("/notifications")}
        variant="none"
        size="none"
      >
        <LucideBell size={30} />
      </Button>
      <span className="absolute right-1 top-1 inline-flex aspect-square min-h-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary text-[0.5rem] font-bold leading-none text-primary-foreground">
        {data?.count || 0}
      </span>
    </div>
  );
};

export default Notification;
