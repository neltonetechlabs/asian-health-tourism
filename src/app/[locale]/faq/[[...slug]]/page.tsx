import { Metadata, NextPage } from "next";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import classNames from "classnames";

import { InnerBanner, MotionDiv } from "@/components";
import { API_CLIENT } from "@/services";

import style from "../style.module.css";
import useAppLocale from "@/hooks/useAppLocale";
import { listNumber } from "@/utils/utility";
import FormSelect from "@/components/forms/formselect";
import { FaqData } from "@/models/api.data";
import FAQAccordion from "./faqaccordion";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface FAQPageProps {
  params: { locale: string; slug: string };
  searchParams: { category: string }
}


export async function generateMetadata(
): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("faq");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

const FAQ: NextPage<FAQPageProps> = async ({ params: { locale, slug }, searchParams: { category } }) => {
  unstable_setRequestLocale(locale);
  const faqcategories = await API_CLIENT.fetchFaqCategories();
  const activeId = category ? category.toString() : faqcategories[0]?.id.toString();
  const faqList = await API_CLIENT.fetchFAQList();
  const { translate } = useAppLocale({ locale });

  if (!faqList?.length) return notFound();


  return (
    <main>
      <InnerBanner
        page="faq"
      />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="md:col-span-10 col-span-12">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-0">
                <FAQAccordion locale={locale} categories={faqcategories} faqList={faqList} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
