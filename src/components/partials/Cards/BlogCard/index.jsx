import { Button } from "@/components/ui/Button";
import { Calendar, ChevronRight, Clock } from "lucide-react";

const BlogCard = ({ item }) => {
  const { date, readTime, title, image } = item;
  return (
    <div className="space-y-4">
      <div className="h-60 overflow-hidden rounded-xl">
        <img
          className="size-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <Calendar />
            <span>{date}</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock />
            <span>{readTime}</span>
          </span>
        </div>
        <h3>{title}</h3>
        <Button variant="link" size="none" className="text-primary">
          <span>Read More</span> <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
