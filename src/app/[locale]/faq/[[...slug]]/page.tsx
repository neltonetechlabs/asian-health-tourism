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
  const faqcategories = await API_CLIENT.fetchFaqCategories();
  const activeId = category ? category.toString() : faqcategories[0]?.id.toString();
  const faqList = await API_CLIENT.fetchFaqByCategory(activeId);
  const { translate } = useAppLocale({ locale });
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
              <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                <MotionDiv className={style.faqcatlist}>
                  <ul className={style.faqMenu}>
                    {faqcategories?.map((faqcat) => (
                      <li
                        key={faqcat?.id}
                        className={classNames(style.arrowbtn, style.arrowright)}
                      >
                        <Link
                          href={`/${locale}/faq?category=${faqcat?.id}`}
                          className={classNames({
                            [style.activeFaq]:
                              faqcat?.id.toString() === activeId,
                          })}
                        >
                          {translate("title", faqcat)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
                <div className={style.faqSelect}>
                  <FormSelect activeFaq={activeId} locale={locale} faqcategories={faqcategories} />
                </div>
                <div className="col-span-2">
                  <MotionDiv className={style.faqlist}>
                    {faqList?.map((faqda, index) => (
                      <Disclosure
                        as={"div"}
                        key={faqda?.id}
                        className="border-b border-[#263036] pb-5 data-[open]:active-accordion mb-4"
                      >
                        <DisclosureButton className="group flex w-full md:items-center items-start justify-start gap-4 text-left">
                          <span className="font-medium text-[#F5A604]">
                            {listNumber(index)}
                          </span>
                          <span className="text-[18px] font-medium text-[#263036] group-data-[hover]:text-black/80">
                            {translate("title", faqda)}
                          </span>
                          <span className="ltr:ml-auto rtl:mr-auto text-2xl">
                            +
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel
                          transition
                          className={style.faqContent}
                        >
                          {translate("description", faqda)}
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </MotionDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
