const ProductHighlight = ({ highlight, highlight_bn, lang }) => {
  return (
    <div>{lang === "en" ? <p>{highlight}</p> : <p>{highlight_bn}</p>}</div>
  );
};

export default ProductHighlight;
