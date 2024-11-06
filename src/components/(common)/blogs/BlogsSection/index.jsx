import { blogs } from "@/assets/data/blogs";
import BlogCard from "@/components/partials/Cards/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/pages/(common)/BlogsPage/blogApis.js";
import { useState } from "react";

const BlogsSection = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchBlogs(1, 30, search),
  });
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex h-top-header w-full items-center justify-end rounded-md px-4">
          {/*<div className="flex items-center">*/}
          {/*  <Button className="rounded-none" size="icon">*/}
          {/*    <Grid className="size-6" />*/}
          {/*  </Button>*/}
          {/*  <Button className="rounded-none" size="icon">*/}
          {/*    <List className="size-6" />*/}
          {/*  </Button>*/}
          {/*</div>*/}
          <div>
            <label className="input block h-8 w-full max-w-80 gap-2 rounded-none bg-card px-0">
              <input
                className="peer size-full flex-1 bg-transparent px-4 text-xs outline-none lg:text-sm"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
              {/*<Button*/}
              {/*  className="rounded-none border-0 text-foreground hover:text-primary"*/}
              {/*  variant="outline"*/}
              {/*  size="icon"*/}
              {/*>*/}
              {/*  <MagnifyOutline className="size-6" />*/}
              {/*</Button>*/}
            </label>
          </div>
        </div>
        <div className="rounded-md px-4 py-6">
          <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {data?.data?.map((item, index) => (
              <BlogCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
