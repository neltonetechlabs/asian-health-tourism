"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import useAppLocale from "@/hooks/useAppLocale";
import { FaqCategoryList } from "@/models/api.data";

interface FormSelectProps {
  faqcategories: FaqCategoryList[];
  locale: string;
  activeFaq: string;
}
const FormSelect: React.FC<FormSelectProps> = ({
  faqcategories = [],
  locale = "en",
  activeFaq = "",
}) => {
  const { translate } = useAppLocale({ locale });
  const navigate = useRouter();
  const handleFaqSelectChange = (selval: ChangeEvent<HTMLSelectElement>) => {
    const value = selval?.target?.value;
    navigate.replace(`/${locale}/faq/${value}`);
  };
  return (
    <select
      onChange={handleFaqSelectChange}
      className="text-black border border-slate-500 w-full p-2 rounded-md"
    >
      {faqcategories?.map((category) => (
        <option
          selected={category?.id.toString() === activeFaq}
          value={category?.id}
          key={category?.id}
        >
          {translate("title", category)}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
