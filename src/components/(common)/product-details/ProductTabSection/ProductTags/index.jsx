const ProductTags = ({ tags, lang }) => {
  return (
    <div>
      <div>
        <ul className="list-inside list-disc">
          {tags?.map((item, i) => (
            <li key={i}>{lang === "en" ? item?.name : item?.name_bn}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductTags;
