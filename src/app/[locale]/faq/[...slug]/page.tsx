import { NextPage } from "next";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import classNames from "classnames";

import { InnerBanner } from "@/components";
import { API_CLIENT } from "@/services";

import style from "../style.module.css";
import useAppLocale from "@/hooks/useAppLocale";
import { listNumber } from "@/utils/utility";

interface FAQPageProps {
  params: { locale: string; slug: string };
}

const FAQ: NextPage<FAQPageProps> = async ({ params: { locale, slug } }) => {
  console.log("faqcatid: ", slug);
  console.log("params", locale);
  const faqcategories = await API_CLIENT.fetchFaqCategories();
  const faqList = await API_CLIENT.fetchFaqByCategory(slug[0]);
  console.log("faqList: ", faqList);
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <InnerBanner
        title="FAQ"
        subTitle="Asian Health Tourism is the biggest medical tourism and healthcare service provider in Iran"
      />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="md:col-span-10 col-span-12">
              <div className="grid grid-cols-3 gap-4">
                <div className={style.faqcatlist}>
                  <ul className={style.faqMenu}>
                    {faqcategories?.map((faqcat) => (
                      <li
                        key={faqcat?.id}
                        className={classNames(style.arrowbtn, style.arrowright)}
                      >
                        <Link
                          href={`/${locale}/faq/${faqcat?.id}`}
                          className={classNames({
                            [style.activeFaq]:
                              faqcat?.id.toString() === slug[0],
                          })}
                        >
                          {translate("title", faqcat)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <div className={style.faqlist}>
                    {faqList?.map((faqda, index) => (
                      <Disclosure
                        as={"div"}
                        className="border-b border-[#263036] pb-5 data-[open]:active-accordion"
                      >
                        <DisclosureButton className="group flex w-full items-center justify-start gap-4">
                          <span className="font-medium text-[#F5A604]">
                            {listNumber(index)}
                          </span>
                          <span className="text-sm font-medium text-[#263036] group-data-[hover]:text-black/80">
                            {translate("title", faqda)}
                          </span>
                          <span className="ltr:ml-auto rtl:mr-auto text-2xl">+</span>
                        </DisclosureButton>
                        <DisclosurePanel
                          transition
                          className="mt-2 text-sm/5 text-black/50"
                        >
                          {translate("description", faqda)}
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </div>
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
