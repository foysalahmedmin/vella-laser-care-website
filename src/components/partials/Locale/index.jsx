import { useTranslation } from "react-i18next";

const Locale = () => {
    const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return (
        <div>
            
        </div>
    );
};

export default Locale;