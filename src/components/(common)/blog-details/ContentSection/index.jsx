import parse from "html-react-parser";

const ContentSection = ({ data }) => {
  return (
    <section className="px-16 py-4 md:px-24">
      {parse(`${data?.content}`)}
    </section>
  );
};

export default ContentSection;
