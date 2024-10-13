import { getLocale } from "next-intl/server";

interface useAppLocaleProps {
  locale?: string | null;
}

const pattern = /^<p><br><\/p>$/;

const useAppLocale = ({ locale }: useAppLocaleProps) => {
  const fetchLocale = async () => await getLocale();
  const localeCode = locale ? locale : fetchLocale();
  const isArabic = localeCode === "ar";
  const translate = (primaryKey: string, data: any): string => {
    try {
      if (primaryKey && data) {
        const keydata = data[`${primaryKey}_${localeCode}`];
        if (keydata && !pattern.test(keydata)) {
          return keydata;
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
