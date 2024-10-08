import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";

const FeatureSection = ({ lang }) => {
  return (
    <>
      <FirstPart lang={lang} />
      <SecondPart lang={lang} />
    </>
  );
};

export default FeatureSection;
