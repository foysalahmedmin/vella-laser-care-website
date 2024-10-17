import { blogs } from "@/assets/data/blogs";
import { MagnifyOutline } from "@/assets/svg/icons/Magnify";
import BlogCard from "@/components/partials/Cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { Grid, List } from "lucide-react";

const BlogsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex h-top-header w-full items-center justify-between rounded-md px-4">
          <div className="flex items-center">
            <Button className="rounded-none" size="icon">
              <Grid className="size-6" />
            </Button>
            <Button className="rounded-none" size="icon">
              <List className="size-6" />
            </Button>
          </div>
          <div>
            <label className="input block h-8 w-full max-w-80 gap-2 rounded-none bg-card px-0">
              <input
                className="peer size-full flex-1 bg-transparent px-4 text-xs outline-none lg:text-sm"
                type="search"
                placeholder="Search"
              />
              <Button
                className="rounded-none border-0 text-foreground hover:text-primary"
                variant="outline"
                size="icon"
              >
                <MagnifyOutline className="size-6" />
              </Button>
            </label>
          </div>
        </div>
        <div className="rounded-md px-4 py-6">
          <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {blogs?.map((item, index) => (
              <BlogCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
