const ProductKeyIngredients = ({
  key_ingredients,
  key_ingredients_bn,
  lang,
}) => {
  return (
    <div>
      <p>{lang === "en" ? key_ingredients : key_ingredients_bn}</p>
    </div>
  );
};

export default ProductKeyIngredients;
