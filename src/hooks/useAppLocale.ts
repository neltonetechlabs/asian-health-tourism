import { useLocale } from "next-intl";

interface useAppLocaleProps {
  locale?: string | null;
}

const useAppLocale = ({
  locale
}: useAppLocaleProps) => {
  const localeCode = locale ? locale : useLocale();
  const isArabic = localeCode === "ar";
  const translate = (primaryKey: string, data: any): string => {
    try {
      if (primaryKey && data) {
        if (data[`${primaryKey}_${localeCode}`]) {
          return data[`${primaryKey}_${localeCode}`];
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