import BlogCard from "@/components/partials/Cards/BlogCard";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestBlogs } from "@/pages/(common)/BlogsPage/blogApis.js";

const BlogsSection = ({ lang }) => {
  const { data } = useQuery({
    queryKey: ["latest_blogs"],
    queryFn: () => fetchLatestBlogs(),
  });
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>{lang === "en" ? "Our Blogs" : "আমাদের ব্লগস"}</Subtitle>
          <Title className="text-title">
            {lang === "en" ? "Latest Blogs & News" : "সাম্প্রতিক ব্লগ এবং খবর"}
          </Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {data?.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
