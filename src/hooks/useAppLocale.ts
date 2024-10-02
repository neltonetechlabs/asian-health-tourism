import { useLocale } from "next-intl";

const useAppLocale = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const translate = (primaryKey: string, data: any): string => {
    try {
      if (primaryKey && data) {
        if (data[`${primaryKey}_${locale}`]) {
          return data[`${primaryKey}_${locale}`];
        } else {
          return data[`${primaryKey}_en`];
        }
      } else throw new Error();
    } catch (error) {
      return "";
    }
  };
  return {
    isArabic,
    translate,
  };
};

export default useAppLocale;