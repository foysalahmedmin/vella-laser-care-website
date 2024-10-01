import { blogs } from "@/assets/data/blogs";
import BlogCard from "@/components/partials/Cards/BlogCard";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const BlogsSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>Our Blogs</Subtitle>
          <Title className="text-title">Latest Blogs & News</Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {blogs.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
