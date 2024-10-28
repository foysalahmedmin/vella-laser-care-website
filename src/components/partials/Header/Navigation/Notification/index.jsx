import { Button } from "@/components/ui/Button";
import { fetchNotificationsCount } from "@/pages/(common)/NotificationsPage/apis.js";
import { useQuery } from "@tanstack/react-query";
import { LucideBell } from "lucide-react";
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
        <LucideBell className="size-[1.5em]" />
      </Button>
      <span className="badge primary absolute right-1 top-1 -translate-y-1/2 translate-x-1/2">
        {data?.count || 0}
      </span>
    </div>
  );
};

export default Notification;
