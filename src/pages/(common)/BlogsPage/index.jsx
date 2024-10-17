import BlogsSection from "@/components/(common)/blogs/BlogsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const BlogsPage = () => {
  return (
    <main>
      <BannerSection
        title="Blogs"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Blogs",
            link: "/blogs",
          },
        ]}
      />
      <BlogsSection />
    </main>
  );
};

export default BlogsPage;
