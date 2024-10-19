"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import useAppLocale from "@/hooks/useAppLocale";
import { FaqCategoryList } from "@/models/api.data";
import SuspenseLoader from "../ui/suspense";

interface FormSelectProps {
  faqcategories: FaqCategoryList[];
  locale: string;
  activeFaq: string;
  onCategoryChange: Function;
}
const FormSelect: React.FC<FormSelectProps> = ({
  faqcategories = [],
  locale = "en",
  activeFaq = "",
  onCategoryChange
}) => {
  const { translate } = useAppLocale({ locale });
  const handleFaqSelectChange = (selval: ChangeEvent<HTMLSelectElement>) => {
    const value = selval?.target?.value;
    onCategoryChange(Number(value));
  };
  return (
    <>
      <select
        onChange={handleFaqSelectChange}
        className="appearance-none text-black border border-slate-500 w-full p-2 rounded-md minimal"
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
    </>
  );
};

export default FormSelect;
