import BannerSection from "@/components/(common)/blog-details/BannerSection";
import ContentSection from "@/components/(common)/blog-details/ContentSection";
import { useQuery } from "@tanstack/react-query";
import { fetchOneBlog } from "@/pages/(common)/BlogsPage/blogApis.js";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["one_blog", id],
    queryFn: () => fetchOneBlog(id),
    enabled: !!id,
  });
  console.log(data);
  return (
    <main>
      <BannerSection data={data} />
      <ContentSection data={data} />
    </main>
  );
};

export default BlogDetailsPage;
