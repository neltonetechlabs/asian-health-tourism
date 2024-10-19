"use client";
import { MotionDiv } from "@/components";
import FormSelect from "@/components/forms/formselect";
import { FaqCategoryList, FaqData } from "@/models/api.data";
import { listNumber } from "@/utils/utility";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import classNames from "classnames";
import { locale } from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../style.module.css";
import useAppLocale from "@/hooks/useAppLocale";
import { API_CLIENT } from "@/services";
import SuspenseLoader from "@/components/ui/suspense";

const filterFaq = (faqCatId: number, faqList: FaqData[]): FaqData[] => {
  if (faqCatId) {
    return faqList?.filter((faqdata) => {
      if (faqdata?.category === faqCatId) return faqdata;
    });
  }
  return faqList;
};

interface FAQAccordionProps {
  locale: string;
  categories: FaqCategoryList[];
  faqList: FaqData[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  locale,
  categories,
  faqList,
}) => {
  const [activeId, setActiveId] = useState<number>(1);
  const { translate } = useAppLocale({ locale });

  const handleFaqCatChange = (value: number) => {
    setActiveId(value);
  };

  return (
    <>
      <MotionDiv className={style.faqcatlist}>
        <ul className={style.faqMenu}>
          {categories?.map((faqcat) => (
            <li
              key={faqcat?.id}
              className={classNames(style.arrowbtn, style.arrowright)}
            >
              <button
                onClick={() => handleFaqCatChange(faqcat?.id)}
                className={classNames("text-left", {
                  [style.activeFaq]: faqcat?.id === activeId,
                })}
              >
                {translate("title", faqcat)}
              </button>
            </li>
          ))}
        </ul>
      </MotionDiv>
      <div className={style.faqSelect}>
        <FormSelect
          activeFaq={activeId.toString()}
          locale={locale}
          faqcategories={categories}
          onCategoryChange={handleFaqCatChange}
        />
      </div>
      <div className="col-span-2">
        <MotionDiv className={style.faqlist}>
          {filterFaq(activeId, faqList)?.map((faqda, index) => (
            <Disclosure
              as={"div"}
              key={faqda?.id}
              className="border-b border-[#263036] pb-5 data-[open]:active-accordion mb-4"
            >
              <DisclosureButton className="group flex w-full md:items-center items-start justify-start gap-4 text-left">
                <span className="font-medium text-[#F5A604]">
                  {listNumber(index)}
                </span>
                <span className="text-[18px] font-medium text-[#263036] group-data-[hover]:text-black/80 rtl:text-right">
                  {translate("title", faqda)}
                </span>
                <span className="ltr:ml-auto rtl:mr-auto text-2xl">+</span>
              </DisclosureButton>
              <DisclosurePanel transition className={style.faqContent}>
                {translate("description", faqda)}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </MotionDiv>
      </div>
    </>
  );
};

export default FAQAccordion;
