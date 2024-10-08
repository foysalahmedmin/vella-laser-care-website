const ProductKeyBenefits = ({ key_benefits, lang }) => {
  return (
    <div>
      <div>
        <ul className="list-inside list-disc">
          {key_benefits?.map((item, i) => (
            <li key={i}>{lang === "en" ? item?.name : item?.name_bn}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductKeyBenefits;
