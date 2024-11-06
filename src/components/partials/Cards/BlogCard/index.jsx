import { Button } from "@/components/ui/Button";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { urls } from "@/api/urls.js";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  const { createdAt, title, banner } = item;
  return (
    <div className="space-y-4">
      <div className="h-60 overflow-hidden rounded-xl">
        <img
          className="size-full object-cover object-center"
          src={`${urls?.blog}/${banner}`}
          alt={title}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <Calendar />
            <span>{moment(new Date(createdAt)).format("MMMM D, YYYY")}</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock />
            <span>3 Min</span>
          </span>
        </div>
        <h3>{title}</h3>
        <Button
          variant="link"
          onClick={() => navigate(`/blog/${item?._id}`)}
          size="none"
          className="text-primary"
        >
          <span>Read More</span> <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
